import { Component, OnInit } from '@angular/core';
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
    private apiService : ApiService
  ) {}

  ngOnInit() {
    this.getUserDetails()
  }
  async getUserDetails() {
    const res:any = await this.apiService.get('user/modify/user/')
    if(res){
      console.log(res)
      this.userInfo = res
      this.isFreePlan = res.plan == 'free' || 'Free' || "FREE" ? true :false
      console.log(this.isFreePlan)
    } 
   
  }

}
