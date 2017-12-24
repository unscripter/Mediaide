import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';

const routes: Routes = [
 { path: '', component: Home },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
