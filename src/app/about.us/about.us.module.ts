import { NgModule } from '@angular/core';
import { routing } from './about.us.routing';
import { OurCompany } from './our.company/our.company';
import { WhyUs } from './why.us/why.us';
import { AboutIndia } from './about.india/about.india'

@NgModule({
    declarations: [ 
        OurCompany,
        WhyUs,
        AboutIndia 
  ],
  imports: [routing,
    ]
})
export class AboutUsModule{

}