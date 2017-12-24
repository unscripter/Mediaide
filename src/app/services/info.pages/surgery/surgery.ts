import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
    selector: 'surgery',
    templateUrl: './surgery.html',
    styleUrls: ['../../services.css']
})

export class Surgery implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}