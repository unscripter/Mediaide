import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurCompany } from './our.company/our.company';
import { WhyUs } from './why.us/why.us';
import { AboutIndia } from './about.india/about.india';
import { VisaInformation } from './visa.info/visa.info';
import { TermsAndCondition } from './termsandcondition/termsandcondition';

const routes: Routes = [
    { path: 'ourcompany', component: OurCompany },
    { path: 'whyus', component: WhyUs },
    { path: 'aboutindia', component: AboutIndia },
    { path: 'visainfo', component: VisaInformation },
    { path: 'termsandconditions', component: TermsAndCondition },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
