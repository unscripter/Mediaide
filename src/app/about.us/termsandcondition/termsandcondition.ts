import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'terms-and-condition',
  templateUrl: './termsandcondition.html',
})

export class TermsAndCondition implements OnInit{
  constructor(private _commonService: CommonService){}
  ngOnInit()
{
  this._commonService.scrollToTop();
}
}

