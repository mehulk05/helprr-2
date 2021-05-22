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

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
