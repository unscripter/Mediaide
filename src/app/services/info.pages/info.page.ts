import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'treatment',
    templateUrl: './info.page.html',
})

export class InfoPages implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}