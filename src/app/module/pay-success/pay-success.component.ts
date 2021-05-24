import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-pay-success',
  templateUrl: './pay-success.component.html',
  styleUrls: ['./pay-success.component.css']
})
export class PaySuccessComponent implements OnInit {

  price:any
  constructor(private router:Router,private apiService : ApiService,) { }
  private localStorage:LocalStorageService

  ngOnInit(): void {
    this.apiService.setHideHamburgerMenu(true)
    if (localStorage.getItem("price") === null) {
      this.price =  this.localStorage.getLocalStore('price')
    }

  }

  goToHome(){
    this.router.navigate(["/home-page"])
  }
}
