import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'services',
  templateUrl: './services.html',
})

export class OurServices {
  constructor(private _commonService: CommonService){}
  ngOnInit()
{
 this._commonService.scrollToTop();
}

}