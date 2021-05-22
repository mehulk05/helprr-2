import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './module/change-password/change-password.component';
import { EditProfileComponent } from './module/edit-profile/edit-profile.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { SubscriptionPlanComponent } from './module/subscription-plan/subscription-plan.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'subscription-plan', component: SubscriptionPlanComponent },
  { path: '**', redirectTo: 'home-page' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
