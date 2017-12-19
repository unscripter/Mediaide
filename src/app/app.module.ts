import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule, BlockUI, NgBlockUI } from 'ng-block-ui';
import { CookieService  } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StartupService } from './startup.service';
import { CommonService } from './common.service'
import { HttpModule } from '@angular/http';
import { HttpInterceptorModule } from 'ng-http-interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CommonAPIService } from './app.api.service';
import { AppComponent } from './app.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { AboutIndia } from './about.us/about.india/about.india';
import { WhyUs } from './about.us/why.us/why.us';
import { OurCompany } from './about.us/our.company/our.company';
import { FeaturedServices } from './services/featured.services/featured.services';
import { MedicalTreatment } from './services/medical.treatment/medical.treatment';
import { PostCare } from './services/post.care/post.care';
import { AppRoutingModule } from './app.routing.module';
import { RegistrationForm } from './forms/registration/registration.form';
import { FormsModule } from '@angular/forms';
import { LoginForm } from './forms/login/login';
import { ContactUs } from './contact/contact';
import { FAQ } from './faq/faq';
import { ExpressionValidationModule } from './shared/directives/expression.validation/expression.validation.module';
import { from } from 'rxjs/observable/from';

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
    ExpressionValidationModule
  ],
  declarations: [
    AppComponent,
    Header,
    Footer,
    AboutIndia,
    WhyUs,
    OurCompany,
    PostCare,
    FeaturedServices,
    MedicalTreatment,
    RegistrationForm,
    LoginForm,
    ContactUs,
    FAQ
  ],
  providers: [
    CookieService, 
    StartupService,
    StartupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
