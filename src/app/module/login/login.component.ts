import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: any = null;
  constructor(
    private apiService: ApiService,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
  }


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  async onSubmit(form: NgForm) {
    this.isLoading = true;
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
      const response: any = this.apiService.post('user/login/', requestBody);
      console.log(response);

      form.reset()
    }
    else {
      // this.authService.createUser(email, password)

      form.reset()
    }
  }

}
