import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './layouts/privacy-policy/privacy-policy.component';
import { TermsAndServiceComponent } from './layouts/terms-and-service/terms-and-service.component';
import { ChangePasswordComponent } from './module/change-password/change-password.component';
import { EditProfileComponent } from './module/edit-profile/edit-profile.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { LoginComponent } from './module/login/login.component';
import { PayFailureComponent } from './module/pay-failure/pay-failure.component';
import { PaySuccessComponent } from './module/pay-success/pay-success.component';
import { PaymentComponent } from './module/payment/payment.component';
import { SubscriptionPlanComponent } from './module/subscription-plan/subscription-plan.component';
import { CanLoginActivate } from './shared/auth.gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent ,canActivate: [CanLoginActivate]},
  { path: 'edit-profile', component: EditProfileComponent ,canActivate: [CanLoginActivate]},
  { path: 'change-password', component: ChangePasswordComponent ,canActivate: [CanLoginActivate]},
  { path: 'login', component: LoginComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsAndServiceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pay-success', component: PaySuccessComponent,canActivate: [CanLoginActivate] },
  { path: 'pay-failure', component: PayFailureComponent,canActivate: [CanLoginActivate] },
  { path: 'payment', component: PaymentComponent,canActivate: [CanLoginActivate] },
  { path: 'subscription-plan', component: SubscriptionPlanComponent,  },
  // { path: '**', redirectTo: 'home-page' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,
    scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
