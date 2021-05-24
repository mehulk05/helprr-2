import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from 'src/app/shared/api.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  tokenId:any
  cardId:any
  priceId:any
  price:any
  @ViewChild(StripeCardComponent, { static: false }) card: StripeCardComponent;
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  // cardOptions: StripeCardElementOptions = {
  //   style: {
  //     base: {
  //       iconColor: '#666EE8',
  //       color: '#31325F',
  //       lineHeight: '40px',
  //       fontWeight: 300,
  //       fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //       fontSize: '18px',
  //       '::placeholder': {
  //         color: '#CFD7E0',
  //       },
  //     },
  //   },
  // };

   cardOptions: StripeCardElementOptions = {
        iconStyle: 'solid',
        hidePostalCode: true,
        style: {
            base: {
                iconColor: '#262628',
                color: '#262628',
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                fontStyle: 'normal',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#262628',
                },
            },
            invalid: {
                iconColor: '#eb1c26',
                color: '#eb1c26',
            },

        }
    };
  constructor(private stripeService: StripeService,private activatedRoute:ActivatedRoute,
    private apiService : ApiService,
    private ngxLoader: NgxUiLoaderService,
    private router:Router,
    private localStorage:LocalStorageService) { }



  ngOnInit(): void {
    this.apiService.setHideHamburgerMenu(true)
    this.activatedRoute.queryParams.subscribe(data=>{
      this.price = atob(data?.p)
      this.localStorage.setLocalStore('price',this.price)
      this.priceId = atob(data?.i)
      console.log(this.price,this.priceId)
    })
  }

  async stripeTokenGenerate() {
  
    this.stripeService
      .createPaymentMethod({
        type:'card',
        card:  this.card.getCard()
      })
      .subscribe((result:any) => {
        console.log("result",result)
        if (result.paymentMethod) {
         
          //.tokenId = result.paymentMethod.id;
          this.cardId = result.paymentMethod.id;
          this.confirmPayment()
        } else if (result.error) {
          // this.toastr.error(result.error.message);
          // this.spinner.hide();
        }
      });
  }

 async  confirmPayment(){
  this.ngxLoader.start()
    const reqBody = {
      payment_method:this.cardId,
      price_id:this.priceId
    }

    const response: any = await this.apiService.post('payments/subscribe/', reqBody);
    console.log(response);
    if(response){
     
      this.router.navigate(["/pay-success"])
  }
}
}
