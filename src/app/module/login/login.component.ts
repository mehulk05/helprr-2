import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  error: any = null;
  constructor(
    private apiService: ApiService,
    private ngxLoader: NgxUiLoaderService,
    private router : Router,
    private localStorage:LocalStorageService
  ) { }

  ngOnInit(): void {
  }


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  async onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const username = '';

    if (this.isLoginMode) {
      // this.authService.signIn(email, password)
      const requestBody = {
        email,
        password,
        username
      }

      this.ngxLoader.start();
      const response: any = await this.apiService.post('user/login/', requestBody);
      console.log(response);
      if(response){
        this.localStorage.setLocalStore('token',  `Bearer ${response.access_token}`);
        this.localStorage.setLocalStore('userData',  response.user);
        this.router.navigate(["/home-page"])
      }

      form.reset()
    }
    else {
      // this.authService.createUser(email, password)
      form.reset()
    }
  }

}
