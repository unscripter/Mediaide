import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './not-found.component';
import { FeaturedServices } from './featured.services/featured.services';
import { MedicalTreatment } from './medical.treatment/medical.treatment';
import { PostCare } from './post.care/post.care';

const routes: Routes = [
    {path: 'postcare', component: PostCare},    
    {path: 'featuredservices', component: FeaturedServices},
    {path: 'medicaltreatment', component: MedicalTreatment},
    {path: 'medicaltreatment/treatment', loadChildren: './info.pages/info.page.module#OurTreatmentModule'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
