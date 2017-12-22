import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { RegistrationForm } from './forms/registration/registration.form';
import { LoginForm } from './forms/login/login';
import { ContactUs } from './contact/contact';
import { FAQ } from './faq/faq';
import { QuotationModule } from './quotation/quotation.module';
import { UserProfile } from './profile/profile';

 export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'registration', component: RegistrationForm },  
    { path: 'login', component: LoginForm },
    { path: 'contact', component: ContactUs },
    { path: 'faq', component: FAQ },
    { path: 'profile', component: UserProfile },
    //this is for loading children as lazy loading
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'quotation', loadChildren : './quotation/quotation.module#QuotationModule' } ,
    { path: 'about', loadChildren: './about.us/about.us.module#AboutUsModule' },
    { path: 'services', loadChildren: './services/services.module#OurServicesModule' }   
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
