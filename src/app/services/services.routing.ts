import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedServices } from './featured.services/featured.services';
import { MedicalTreatment } from './medical.treatment/medical.treatment';
import { PostCare } from './post.care/post.care';

const routes: Routes = [
    {path: 'featuredservices', component: FeaturedServices},
    {path: 'medicaltreatment', component: MedicalTreatment},
    {path: 'postcare', component: PostCare},        
    {path: 'medicaltreatment/treatment', loadChildren: './info.pages/info.page.module#OurTreatmentModule'},
    
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
