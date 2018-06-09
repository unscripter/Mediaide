import { Component } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { FAQData } from './faq.modle'

@Component({
  selector: 'frequenty-asked-questions',
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})

export class FAQ {
    private queationData:any;
    constructor(){
        this.queationData = FAQData;
        console.log("DDDDDDDDDDDD",this.queationData);
    }

} 
