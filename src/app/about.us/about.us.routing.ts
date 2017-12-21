import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './not-found.component';
import { OurCompany } from './our.company/our.company';
import { WhyUs } from './why.us/why.us';
import { AboutIndia } from './about.india/about.india'

const routes: Routes = [
    {path: 'ourcompany', component: OurCompany},
    {path: 'whyus', component: WhyUs},
    {path: 'aboutindia', component: AboutIndia},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
