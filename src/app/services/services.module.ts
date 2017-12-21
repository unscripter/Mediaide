import { NgModule } from '@angular/core';
import { Carousel } from '../shared/carousel/carousel';
import { Router } from '@angular/router';
import { routing } from './services.routing';
import { FeaturedServices } from './featured.services/featured.services';
import { MedicalTreatment } from './medical.treatment/medical.treatment';
import { PostCare } from './post.care/post.care';

@NgModule({
    declarations: [ 
        FeaturedServices,
        MedicalTreatment,
        PostCare 
  ],
  imports: [routing,
    ]
})
export class OurServicesModule{

}