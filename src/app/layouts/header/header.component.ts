import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isshowMenu
  hideHamburgerMenu:any
  constructor( private router:Router,
    private apiService : ApiService,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.apiService.ishideHamburgerMenu.subscribe(data=>{
      console.log("ha,",data)
      this.hideHamburgerMenu =data
    })
  }

  gotoHome(){
    this.router.navigate(["/home-page"])
  }
    showMenu(){
      this.isshowMenu =!this.isshowMenu
      this.apiService.setHeaderMenuForMobile(this.isshowMenu)
  }

  gotoLandingPage(){
    const token: any =  this.localStorageService.getLocalStore('token');
    if(token){
      this.router.navigate(["/"])
    }
    else{
      window.location.href = environment.LANDING_PAGE_URL
    }
  }
}
