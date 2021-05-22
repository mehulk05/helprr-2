import { Component, OnInit, ViewChild } from '@angular/core';
import { AccordionComponent } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {
  isActive =true

   registrationArray: Array<any> = [
    { answer:"abc",participantName: "fahad Haque", participantEmail: "fahad.haq@gmail.com", isAccordionOpen: true },
    {answer:"aaaaa", participantName: "fahad Haque", participantEmail: "fahad.haq@gmail.com", isAccordionOpen: false },
    { answer:"awq2w2" ,participantName: "fahad Haque", participantEmail: "fahad.haq@gmail.com", isAccordionOpen: false }];
    @ViewChild(AccordionComponent) accordion: AccordionComponent;
  constructor() { }

  ngOnInit(): void {
  }


  toggle(){
    this.isActive = !this.isActive
  }

  openNextTab(i: number) {
    //this.accordion.groups[i + 1].isOpen = true;
  }

}
