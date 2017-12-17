import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { Footer } from './shared/footer/footer'

const routes: Routes = [
 { path: '', redirectTo: '/', pathMatch: 'full' },
 { path: '', component: AppComponent },
 { path: 'home', component: Footer},
//   { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
