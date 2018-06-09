import { NgModule } from '@angular/core';
import { Carousel } from '../shared/carousel/carousel';
import { Home } from './home';
import { routing } from './home.routing.module';
import { HomePageTabs } from './homepage.tabs/homepage.tabs';

@NgModule({
    declarations: [ 
      Carousel,
      HomePageTabs,
      Home 
  ],
  imports: [routing,
    ]
})
export class HomeModule{

}