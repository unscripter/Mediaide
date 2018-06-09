import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAQuote } from './quotation';
import { GetEstimation } from '../shared/estimation/estimation';

const routes: Routes = [
    { path: 'quote', component: GetAQuote },
    { path: 'estimate', component: GetEstimation },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
