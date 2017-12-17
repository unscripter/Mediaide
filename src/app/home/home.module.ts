import { NgModule } from '@angular/core';
import { Carousel } from '../shared/carousel/carousel';
import { Home } from './home';
import { Router } from '@angular/router';
import { routing } from './home.routing.module';



@NgModule({
    declarations: [
    Carousel,
    Home
  ],
  imports: [routing]
})
export class HomeModule{

}