import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { SubscriptionPlanComponent } from './module/subscription-plan/subscription-plan.component';
import { LoginComponent } from './module/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { EditProfileComponent } from './module/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './module/change-password/change-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
