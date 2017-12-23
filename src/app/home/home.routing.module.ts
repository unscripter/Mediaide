import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './not-found.component';
import { Home } from './home';

const routes: Routes = [
 { path: '', component: Home },
//   { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
