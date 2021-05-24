import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userInfo: any;
  isFreePlan:any
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private apiService : ApiService,
    private router:Router
  ) {}

  ngOnInit() {
    this.getUserDetails()
  }
  async getUserDetails() {
    this.apiService.setHideHamburgerMenu(false)
    this.ngxLoader.start()
    const res:any = await this.apiService.get('user/modify/user/')
    if(res){
      console.log(res)
      this.userInfo = res
      this.isFreePlan = res.plan == 'free' || 'Free' || "FREE" ? true :false
      console.log(this.isFreePlan)
    } 
  }

  changeRoute(flag){
    this.router.navigate([flag])
  }
}
