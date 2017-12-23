import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cancer } from './cancer/cancer';
import { Cardiac } from './cardiac/cardiac';
import { IVF } from './ivf/ivf';
import { Orthopedic } from './orthopedic/orthopedic';
import { Surgery } from './surgery/surgery';

const routes: Routes = [
    {path: 'cancer', component: Cancer},
    {path: 'cardiac', component: Cardiac},
    {path: 'IVF', component: IVF},
    {path: 'orthopedic', component: Orthopedic},
    {path: 'surgery', component: Surgery},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
