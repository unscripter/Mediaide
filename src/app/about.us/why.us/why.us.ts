import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'why-us',
  templateUrl: './why.us.html',
  styleUrls: ['../about.us.css']
})

export class WhyUs implements OnInit{
  constructor(private _commonService: CommonService){}
  ngOnInit()
{
  this._commonService.scrollToTop();
}
}

