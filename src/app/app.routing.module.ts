import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component' 
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { OurCompany } from './about.us/our.company/our.company';
import { WhyUs } from './about.us/why.us/why.us';
import { AboutIndia } from './about.us/about.india/about.india';
import { FeaturedServices } from './services/featured.services/featured.services';
import { MedicalTreatment } from './services/medical.treatment/medical.treatment';
import { PostCare } from './services/post.care/post.care'

 export const routes: Routes = [
    {path: 'ourcompany', component: OurCompany},
    {path:'whyus',component: WhyUs},
    {path: 'aboutindia', component: AboutIndia},
    {path: 'featuredservices', component: FeaturedServices},
    {path: 'medicaltreatment', component: MedicalTreatment},
    {path: 'postcare', component: PostCare}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}