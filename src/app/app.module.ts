import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
import { RegistrationForm } from './forms/registration.form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
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
    RegistrationForm ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
