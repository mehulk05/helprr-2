import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-service',
  templateUrl: './terms-and-service.component.html',
  styleUrls: ['./terms-and-service.component.css']
})
export class TermsAndServiceComponent implements OnInit {
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
