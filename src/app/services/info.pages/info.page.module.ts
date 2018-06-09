import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from './info.page.routing';
import { Cancer } from './cancer/cancer';
import { Cardiac } from './cardiac/cardiac';
import { IVF } from './ivf/ivf';
import { Orthopedic } from './orthopedic/orthopedic';
import { Surgery } from './surgery/surgery';

@NgModule({
    declarations: [ 
        Cancer,
        Cardiac,
        IVF,
        Orthopedic,
        Surgery,    
  ],
  imports: [routing,
    ]
})
export class OurTreatmentModule{

}