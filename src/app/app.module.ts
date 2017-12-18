import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { routing } from './app.routing.module';
import { Carousel } from './shared/carousel/carousel'
import { HomePageTabs } from './home/homepage.tabs/homepage.tabs'

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Carousel,
    HomePageTabs
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
