import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'about-us',
  templateUrl: './about.us.html',
//   styleUrls: ['../about.us.css']
})

export class AboutUs implements OnInit{
  constructor(private _commonService: CommonService){}
  ngOnInit()
{
  this._commonService.scrollToTop();
}
}