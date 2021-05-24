import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-pay-failure',
  templateUrl: './pay-failure.component.html',
  styleUrls: ['./pay-failure.component.css']
})
export class PayFailureComponent implements OnInit {
  constructor(private router:Router,private apiService : ApiService,) { }

  ngOnInit(): void {
    this.apiService.setHideHamburgerMenu(true)
  }

  goToHome(){
    this.router.navigate(["/home-page"])
  }

  goToPayment(){
    this.router.navigate(["/subscription-plan"])
  }
}
