import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionComponent } from 'ngx-bootstrap/accordion';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {
  isActive =true
  showMore= false
  planData:any
  currentPlan:any={}
  yearlyData:any
  monthlyData:any


   registrationArray: Array<any> = [
    {
      question:"What are Helppr Plans?",
      answer:'Helppr Plan is an all-in-one subscription plan that builds upon your existing Helppr experience, adding powerful features to help you do more with Helppr and save you hours do it the smart way. This includes features like sentence simplification, translation, and audio along with an automatic summary generation, extraction of important keywords, and word or concept explanation all in one place. ', 
      isAccordionOpen: false
    },

    {
      question:"Do I need to purchase Helppr Plans to use Helppr?",
      answer:'Nope! Helppr Plan is not required to use Helppr. Helppr extensions are free to download and use, and payment is not required to create the Helppr account and use the service.Purchasing Helppr Plan will add powerful features to help you do more and consume data smartly and efficiently with Helppr', 
      isAccordionOpen: false
    },

    {
      question:"What features are included in Helppr Plans?",
      answer:'Helppr Plan includes powerful features like sentence simplification, translation, and audio files for your content, helping you to consume information effectively and save you hours do it the smart way.To know how these features work, take a demo for these features in ___________', 
      isAccordionOpen: false
    },

    {
      question:"How do I pay for Helppr Plans?",
      answer:'We accept payment through all major credit cards (Visa, American Express, Mastercard, Discover), debit cards, and UPI.<br> Annual memberships will be charged once each year on the anniversary of your signup date. Monthly memberships will be charged each month on the day you signed up.', 
      isAccordionOpen: false
    },

    {
      question:"I use Helppr on multiple devices. Do I need to buy multiple plans?",
      answer:'One plan is all it takes! Your Helppr Plan is linked to your Helppr account, so you’ll be able to enjoy the features included with Helppr Plan on any device. You can enable your Helppr Plan membership on a new device by simply logging in to your Helppr account.      ', 
      isAccordionOpen: false
    },

    {
      question:"I am having trouble purchasing. How can I get help?      ",
      answer:'Helppr team will be happy to help you. Click here to leave a message.   Or use Helppr Community Forum to understand what went wrong and how can this be solved.          ', 
      isAccordionOpen: false
    },
    
    ];

    registrationArray1: Array<any> = [
      {
        question:"Where can I find my past purchases and invoices?",
        answer:'You can find the invoice and past purchases in “My Plans” in “My Account”. Or click here ', 
        isAccordionOpen: false
      },

      {
        question:"Does Helppr offer discounts?",
        answer:'coming soon ', 
        isAccordionOpen: false
      },

      {
        question:"How secure is Helppr?",
        answer:'Helppr is a secure space where you can privately consume all your documents, articles, and more that matter to you. If you choose to purchase the Helppr plan, our third-party payment processors will collect and handle your credit card and related payment information. Such third-party processors’ use of your personal information is governed by their respective privacy policies. They comply with applicable law and will also abide by the commitments in the privacy policy. So, no worries. Your information is in safe hands.', 
        isAccordionOpen: false
      },

      {
        question:"Can I get a refund from Helppr?        ",
        answer:'If you start a free trial, the free trial begins before you are first charged, so there are no payments to be refunded. Once you start a paid Helppr Plan period, Annual memberships will be charged once each year on the anniversary of your signup date. Monthly memberships will be charged each month on the day you signed up. If the payment has already been made for the period, that cannot be refunded. But you can cancel your membership at any time and after the cancellation, you will not be charged for next month/year.        ', 
        isAccordionOpen: false
      },
      {
        question:"How do I update my payment/billing information?       ",
        answer:'You can update your payment details from the “Payment Settings” in “My Account”. Or click here.        ', 
        isAccordionOpen: false
      },
    ]
    @ViewChild(AccordionComponent) accordion: AccordionComponent;
    constructor( private apiService : ApiService,
      private ngxLoader: NgxUiLoaderService,
      private router:Router) { }

  async ngOnInit() {
    this.currentPlan.type ="Yearly"
    this.ngxLoader.start()
    const response: any = await this.apiService.get('payments/config/')
    if(response){
      console.log(response.data[0].data)
      this.planData = response.data[0].data
      if(this.planData[0].price > this.planData[1].price){
        this.yearlyData = this.planData[0]
        this.monthlyData = this.planData[1]
        this.currentPlan.price = this.yearlyData.unit_amount
        this.currentPlan.priceId = this.yearlyData.id
      }
      else{
        this.yearlyData = this.planData[1]
        this.monthlyData = this.planData[0]
        this.currentPlan.price = this.yearlyData.unit_amount
        this.currentPlan.priceId = this.yearlyData.id
      }
      console.log("yearly",this.yearlyData)
      console.log("month",this.monthlyData)
      console.log("currnet",this.currentPlan)
      
    }
   
  }


  toggle(currentPlan){

    this.isActive = !this.isActive
    if(this.isActive){
      this.currentPlan.price = this.yearlyData.unit_amount
      this.currentPlan.priceId = this.yearlyData.id
      this.currentPlan.type ="Yearly"
    }
    else{
      this.currentPlan.price = this.monthlyData.unit_amount
      this.currentPlan.priceId = this.monthlyData.id
      this.currentPlan.type ="Monthly"
    }
    console.log(this.currentPlan.price)
  }

  openNextTab(i: number) {
    //this.accordion.groups[i + 1].isOpen = true;
  }

  gotoPayment(){

    this.router.navigate(["/payment"],{queryParams:{p:btoa(this.currentPlan.price),i:btoa(this.currentPlan.priceId)}})
  }

  showMoreEvent(){
    this.showMore =true
  }
}
