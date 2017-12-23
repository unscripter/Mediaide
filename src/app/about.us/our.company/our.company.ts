import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'our-company',
  templateUrl: './our.company.html',
  styleUrls: ['../about.us.css']
})

export class OurCompany implements OnInit{
  constructor(private _commonService: CommonService){}
  ngOnInit()
{
  this._commonService.scrollToTop();
}
}

