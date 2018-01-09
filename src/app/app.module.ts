import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule, BlockUI, NgBlockUI } from 'ng-block-ui';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StartupService } from './startup.service';
import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { HttpInterceptorModule } from 'ng-http-interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonAPIService } from './app.api.service';
import { AppComponent } from './app.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { AppRoutingModule } from './app.routing.module';
import { RegistrationForm } from './forms/registration/registration.form';
import { FormsModule } from '@angular/forms';
import { LoginForm } from './forms/login/login';
import { EnquiryForm } from './forms/enquiry/enquiry';
import { ContactUs } from './contact/contact';
import { FAQ } from './faq/faq';
import { UserProfile } from './profile/profile';
import { ExpressionValidationModule } from './shared/directives/expression.validation/expression.validation.module';
import { AboutUs } from './about.us/about.us';
import { OurServices } from './services/services';
import { ForgotPassword } from './forms/forgot.password/forgot.password';
import { Work } from './work/work';
import { Home } from './home/home';
import { HomePageTabs } from './home/homepage.tabs/homepage.tabs';
import { Carousel } from './shared/carousel/carousel';
import { TravelTips } from './shared/travel/travel';
import { PasswordReconfirmation } from './forms/password.reconfirmation/password.reconfirmation';
import { UploadService } from './upload-service';
import { UploadFile } from './shared/fileupload';


@NgModule({
  imports: [
    BrowserModule,
    BlockUIModule,
    HttpInterceptorModule,
    HttpModule,
    NgbModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ExpressionValidationModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    Header,
    Footer,
    AboutUs,
    OurServices,
    RegistrationForm,
    LoginForm,
    EnquiryForm,
    ContactUs,
    FAQ,
    UserProfile,
    ForgotPassword,
    EnquiryForm,
    Work,
    Home,
    PasswordReconfirmation,
    HomePageTabs,
    Carousel,
    TravelTips,
    UploadFile
  ],
  providers: [
    CookieService,
    StartupService,
    CommonService,
    CommonAPIService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
