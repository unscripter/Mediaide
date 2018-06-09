import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { RegistrationForm } from './forms/registration/registration.form';
import { LoginForm } from './forms/login/login';
import { EnquiryForm } from './forms/enquiry/enquiry';
import { ContactUs } from './contact/contact';
import { Work } from './work/work';
import { FAQ } from './faq/faq';
import { Home } from './home/home';
import { QuotationModule } from './quotation/quotation.module';
import { UserProfile } from './profile/profile';
import { ForgotPassword } from './forms/forgot.password/forgot.password';
import { TravelTips } from './shared/travel/travel';
import { PasswordReconfirmation } from './forms/password.reconfirmation/password.reconfirmation';

 export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: Home},
    { path: 'registration', component: RegistrationForm },  
    { path: 'login', component: LoginForm },
    { path: 'enquiry', component: EnquiryForm },
    { path: 'contact', component: ContactUs },
    { path: 'faq', component: FAQ },
    { path: 'profile', component: UserProfile },
    { path: 'forgotpassword', component: ForgotPassword},
    { path: 'enquiry' , component: EnquiryForm} ,
    { path: 'reconfirm', component: PasswordReconfirmation },
    { path: 'enquiry' , component: EnquiryForm},
    { path: 'how-we-work', component: Work},
    { path: 'travel-tips', component: TravelTips},    
    //this is for loading children as lazy loading
    // { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'services', loadChildren: './services/services.module#OurServicesModule' },    
    { path: 'get-a-quote', loadChildren : './quotation/quotation.module#QuotationModule' } ,
    { path: 'aboutus', loadChildren: './about.us/about.us.module#AboutUsModule' },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
