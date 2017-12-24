import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'about-india',
  templateUrl: './about.india.html',
  styleUrls: ['../about.us.css']
})

export class AboutIndia implements OnInit{
  constructor(private _commonService: CommonService){}
  ngOnInit()
{
  this._commonService.scrollToTop();
}
}
