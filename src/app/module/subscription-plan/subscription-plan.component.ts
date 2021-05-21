import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {
  isActive =true
  constructor() { }

  ngOnInit(): void {
  }


  toggle(){
    this.isActive = !this.isActive
  }

}
