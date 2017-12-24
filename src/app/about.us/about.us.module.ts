import { NgModule } from '@angular/core';
import { routing } from './about.us.routing';
import { OurCompany } from './our.company/our.company';
import { WhyUs } from './why.us/why.us';
import { AboutIndia } from './about.india/about.india';
import { VisaInformation } from './visa.info/visa.info';
import { TermsAndCondition } from './termsandcondition/termsandcondition';

@NgModule({
    declarations: [
        OurCompany,
        WhyUs,
        AboutIndia,
        VisaInformation,
        TermsAndCondition
    ],
    imports: [routing,
    ]
})
export class AboutUsModule {

}