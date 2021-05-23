import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-failure',
  templateUrl: './pay-failure.component.html',
  styleUrls: ['./pay-failure.component.css']
})
export class PayFailureComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.router.navigate(["/home-page"])
  }

  goToPayment(){
    this.router.navigate(["/subscription-plan"])
  }
}
