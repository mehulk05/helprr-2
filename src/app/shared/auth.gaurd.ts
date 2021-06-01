import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';

// Service
import { LocalStorageService } from './local-storage.service';

/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (without Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanLoginActivate implements CanActivate {
  constructor(public localStorageService: LocalStorageService, public router: Router,private apiService:ApiService) { }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    let url: string = state.url;
    console.log(state)
    return this.checkLogin(url);
    // const token: any =  this.localStorageService.getLocalStore('token');
    // if (!token) {
    //   this.router.navigate(['/login']);
    // }
    // return true;
  }

  checkLogin(url): boolean {
    //if (this.authService.isLoggedIn) { return true; }
    const token: any =  this.localStorageService.getLocalStore('token');
    if(token) {return true;}
    // Store the attempted URL for redirecting
    this.localStorageService.setLocalStore("redirectUrl",url)
    this.apiService.isAuthenticatedUser()
    // Navigate to the login page with extras
   // this.router.navigate(['/login'],{ queryParams: { url}});
    return false;

  }
}
  // async canActivate() {
  //   const token: any = await this.localStorageService.getLocalStore('token');
  //   console.log(token)
  //   if (!token) {
  //     this.router.navigate(['/login']);
  

  //   }
    
  //   return token;
  // }

 

//   if (!isAuth) {
//     this.router.navigate(['/login']);
//   }
//   return isAuth;
// }

/****************************************************************************/
