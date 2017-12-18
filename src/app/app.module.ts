import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { AboutIndia } from './about.us/about.india/about.india';
import { WhyUs } from './about.us/why.us/why.us';
import { OurCompany } from './about.us/our.company/our.company';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    AboutIndia,
    WhyUs,
    OurCompany
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
