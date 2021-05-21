import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  previewImage="./assets/images/noimg.png"
  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      bio: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {})
    });
  }

  onSavePost(){

  }

  onFileSelect(e){

  }

}
