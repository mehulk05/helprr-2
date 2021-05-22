import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  isactive:boolean =false
  switch:any
  constructor() { }

  ngOnInit(): void {
  }

  getToggleValue(e){
    this.isactive =this.switch
    console.log(this.switch,e)
  }
}
