import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from './quotation.routing';
import { GetAQuote } from './quotation';
import { GetEstimation } from '../shared/estimation/estimation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
    GetAQuote,
    GetEstimation
  ],
  imports: [routing,
    FormsModule,
    CommonModule,    
],
})
export class QuotationModule{

}