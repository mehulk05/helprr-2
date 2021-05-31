import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
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
    private apiService : ApiService,) { }

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
    window.location.href = environment.LANDING_PAGE_URL
  }
}
