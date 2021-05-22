import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { SubscriptionPlanComponent } from './module/subscription-plan/subscription-plan.component';
import { LoginComponent } from './module/login/login.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { EditProfileComponent } from './module/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './module/change-password/change-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { environment } from 'src/environments/environment';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentComponent } from './module/payment/payment.component';
import { TermsAndServiceComponent } from './layouts/terms-and-service/terms-and-service.component';
import { PrivacyPolicyComponent } from './layouts/privacy-policy/privacy-policy.component';
import { CanLoginActivate } from './shared/auth.gaurd';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubscriptionPlanComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    PaymentComponent,
    TermsAndServiceComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxStripeModule.forRoot(environment.STRIPE_PUBLISHER_KEY),




  ],

  providers: [CanLoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
