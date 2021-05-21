import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  constructor() { }
  password = 'password';
  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.form = new FormGroup({
      currentp: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      newp: new FormControl(null, { validators: [Validators.required] }),
      repeatedp: new FormControl(null,)
    });
  }

  onSavePost(){

  }

  showPassword(index){
if (this.password === 'password') {
      this.password = 'text';
    
    } else {
      this.password = 'password';
     
    }
  }
}
