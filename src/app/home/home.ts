import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'home', 
    templateUrl: './home.html',
    styleUrls: ['./home.css'] 
})

export class Home implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
  {
    this._commonService.scrollToTop();
  }
  }
  