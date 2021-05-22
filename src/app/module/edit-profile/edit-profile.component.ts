import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  previewImage="./assets/images/noimg.png"
  userInfo: any;
  constructor( private apiService : ApiService,
    private ngxLoader: NgxUiLoaderService,
    private router:Router) { }

  ngOnInit(): void {
    this.createForm()
    this.getUserInfo()
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      fname: new FormControl(null, { validators: [Validators.required] }),
      lname: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {})
    });
  }

  async onSavePost(){
    console.log(this.form.value)
    let reqBody = {
      fname:this.form.value.fname,
      lname :this.form.value.lname,
      username  :this.form.value.username,
    }  
    this.ngxLoader.start();
    const response: any = await this.apiService.post('user/modify/user/', reqBody);
    console.log(response);
    if(response){
      this.apiService.success("Profile Updated Successfully")
    this.router.navigate(["/home-page"])
  }
}

  async getUserInfo(){
    this.ngxLoader.start();
    const res:any = await this.apiService.get('user/modify/user/')
    if(res){
      console.log(res)
      this.userInfo = res
     this.patchFormValues(res)
    } 
   
  }

  patchFormValues(res){
    this.form.setValue({
      username: res.username,
      fname: res.fname,
      lname: res.lname,
      image:''
    })
  }

  onFileSelect(e){

  }

}
