import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  redirectUrl ="/"
  mainUrl:any
  constructor(
    private apiService: ApiService,
    private ngxLoader: NgxUiLoaderService,
    private router : Router,
    private localStorage:LocalStorageService,private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mainUrl = window.location.href.split('#')
    console.log(",ain",this.mainUrl)
    this.activatedRoute.queryParams.subscribe((data:any)=>{
      this.redirectUrl =data.url
      console.log("data", this.redirectUrl)
      console.log(this.activatedRoute)


      console.log(this.mainUrl + "#" + this.redirectUrl)
    })
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
        // this.localStorage.setLocalStore('userData',  response.user);
        // let redirectUrl =   this.localStorage.getLocalStore("redirectUrl")
       
        if( this.redirectUrl){
          // console.log(  window.location.protocol+"//"+ window.location.host+ "/#" + redirectUrl)
      //    window.location.href =  window.location.protocol+"//"+ window.location.host+ "/#" + this.redirectUrl
           window.location.href = this.mainUrl +"#" + this.redirectUrl
         //window.location.href='http://www.cnn.com/';
        }
        else{
          this.router.navigate(["/"])
        }
        
        
      }

      form.reset()
    }
    else {
      // this.authService.createUser(email, password)
      form.reset()
    }
  }

}
