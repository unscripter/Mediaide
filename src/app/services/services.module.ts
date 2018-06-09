import { NgModule } from '@angular/core';
import { Carousel } from '../shared/carousel/carousel';
import { Router } from '@angular/router';
import { routing } from './services.routing';
import { FeaturedServices } from './featured.services/featured.services';
import { MedicalTreatment } from './medical.treatment/medical.treatment';
import { PostCare } from './post.care/post.care';
import { InfoPages } from './info.pages/info.page'

@NgModule({
    declarations: [
        FeaturedServices,
        MedicalTreatment,
        PostCare,
        InfoPages
    ],
    imports: [routing,
    ]
})
export class OurServicesModule {

}