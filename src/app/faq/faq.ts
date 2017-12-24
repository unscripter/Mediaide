import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { FAQData } from './faq.modle'

@Component({
  selector: 'frequenty-asked-questions',
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})

export class FAQ implements OnInit{
    private faqData:any;    
    constructor(private _commonService: CommonService){}
    ngOnInit()
  {
    this._commonService.scrollToTop();
    this.faqData = FAQData;
  }
  }
