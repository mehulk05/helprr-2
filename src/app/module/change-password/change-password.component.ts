import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  password = 'password';
  index: any;
  constructor( private apiService : ApiService,
    private ngxLoader: NgxUiLoaderService,
    private router:Router) { }



  ngOnInit(): void {
    this.apiService.setHideHamburgerMenu(false)
    this.createForm()
  }
  createForm() {
    this.form = new FormGroup({
      // currentp: new FormControl(null, {
      //   validators: [Validators.required, Validators.minLength(3)]
      // }),
      newp: new FormControl(null, { validators: [Validators.required] }),
      repeatedp: new FormControl(null,{ validators: [Validators.required] })
    });
  }

  async onSavePost(){
    console.log(this.form.value)
    let reqBody = {
   
      new_password1 :this.form.value.newp,
      new_password2  :this.form.value.repeatedp,
    }
  //   }  
    this.ngxLoader.start();
    const response: any = await this.apiService.post('user/password/change/', reqBody);
    console.log(response);
    if(response){
      this.apiService.success("Password Updated Successfully")
    this.router.navigate(["/home-page"])
  }
  }

  showPassword(index){
    this.index =index
    if (this.password === 'password') {
      this.password = 'text';
    
    } else {
      this.password = 'password';
     
    }
  }
}
