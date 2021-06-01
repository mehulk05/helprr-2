import { EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { ERROR_HANDLER_MESSAGE } from '../common/constant';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private hostUrl = environment.APP_URL;
  isShowMenu = new BehaviorSubject(false)
  ishideHamburgerMenu = new BehaviorSubject(false)
  @Output() isAuthenticated = new EventEmitter<any>();
  constructor(
    public http: HttpClient,
    private ngxLoader: NgxUiLoaderService,
    private localstorage: LocalStorageService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) { }

  setHeaderMenuForMobile(flag){
    this.isShowMenu.next(flag)
  }
  setHideHamburgerMenu(flag){
    this.ishideHamburgerMenu.next(flag)
  }

  isAuthenticatedUser(){
    this.isAuthenticated.emit()
  }
  
  getHeader(headerOptions, doNotSendAuthorizationParam) {
    const headerParams = { Authorization: '' };
    // if (this.localstorage.getLocalStore('language')) {
    //   headerParams['X-L10N-Locale'] = this.localstorage.getLocalStore('language');
    // } else {
    //   headerParams['X-L10N-Locale'] = 'en';
    // }
    if (doNotSendAuthorizationParam !== true && this.localstorage.getLocalStore('token')) {
      headerParams.Authorization = this.localstorage.getLocalStore('token');
    }
    if (headerOptions) {
      Object.assign(headerParams, headerOptions);
    }
    const headers = new HttpHeaders(headerParams);
    return { headers };
  }

  post(
    url: string, body: any, doNotSendAuthorizationParam: boolean = false, headerOptions: any = {}, loaderContinue?) {
    return new Promise(async (resolve, reject) => {
      const options = await this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.post(`${this.hostUrl}${url}`, body,options).pipe(map((res) => {
        if (!loaderContinue) {
          this.ngxLoader.stop();
        }
        return res;
      })).subscribe((res) => {
        resolve(res);
      }, (err) => {
        this.handleError(err);
        reject(err);
      });
    });
  }

  get(url: string, doNotSendAuthorizationParam: boolean = false, headerOptions: any = {}, loaderContinue?) {
    return new Promise(async (resolve, reject) => {
      const options = await this.getHeader(headerOptions, doNotSendAuthorizationParam);
      console.log(options)
      this.http.get(`${this.hostUrl}${url}`, options).pipe(map((res) => {
        if (!loaderContinue) {
          this.ngxLoader.stop();
        }
        return res;
      }))
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          this.handleError(err);
          reject(err);
        });
    });
  }

  put(url, body: any, headerOptions: any = {}, doNotSendAuthorizationParam: boolean = false, loaderContinue?) {
    return new Promise(async (resolve, reject) => {
      const options = await this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.put(`${this.hostUrl}${url}`, body, options).pipe(map((res) => {
        if (!loaderContinue) {
          this.ngxLoader.stop();
        }
        return res;
      })).subscribe((res) => {
        resolve(res);
      }, (err) => {
        this.handleError(err);
        reject(err);
      });
    });
  }

  delete(url, headerOptions: any = {}, doNotSendAuthorizationParam: boolean = false, loaderContinue?) {
    return new Promise(async (resolve, reject) => {
      const options = await this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.delete(`${this.hostUrl}${url}`, options).pipe(map((res) => {
        if (!loaderContinue) {
          this.ngxLoader.stop();
        }
        return res;
      })).subscribe((res) => {
        resolve(res);
      }, (err) => {
        this.handleError(err);
        reject(err);
      });
    });
  }

  async handleError(err) {
    console.log(err)
    if (err.status === 400) {
      if(err.error?.new_password1 || err.error?.new_password2){
        this.error("Error while changing password.Please try again")
      }

       else if(err.error.non_field_errors){
        this.error(err.error.non_field_errors[0]);
      }
      else if(err.url == "https://dev.helppr.ai/payments/subscribe/" || err.url == "https://uat.helppr.ai/payments/subscribe/"){
        this.router.navigate(["/pay-failure"])
       
      }
      else{
        this.error(JSON.stringify(err.error))
      }
    
 
      
    } else if (err.status === 404) {
      this.error(err.error.non_field_errors[0]);
    } else if (err.status === 401) {
      console.log(err)
      this.error(err.error.non_field_errors);
      this.localstorage.clearAllLocalStoreData();
      this.router.navigate(['/']);
    } else if (err.status === 412) {
      this.error(err.error.non_field_errors[0]);
    } else if (err.status === 422) {
      this.error(err.error.non_field_errors[0]);
    } else if (err.status === 500) {
      this.error(ERROR_HANDLER_MESSAGE.INTERNAL_SERVER_ERROR);
    } else if (err.status === 0) {
      this.error(ERROR_HANDLER_MESSAGE.SERVER_ERROR_OR_NO_INTERNET);
    }
  }

  error(message) {
    this.ngxLoader.stop();
    Swal.fire({
      title: ERROR_HANDLER_MESSAGE.ERROR_TITLE,
      text: message,
      icon: 'error',
      timer: 3000,
      confirmButtonText: ERROR_HANDLER_MESSAGE.OKAY_TEXT
    });
  }

  async success(message) {
    this.ngxLoader.stop();
    Swal.fire({
      title: ERROR_HANDLER_MESSAGE.SUCCESS_TITLE,
      text: message,
      icon: 'success',
      timer: 3000,
      confirmButtonText: ERROR_HANDLER_MESSAGE.OKAY_TEXT
    });
  }

}
