import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
    selector: 'cardiac',
    templateUrl: './cardiac.html',
    styleUrls: ['../../services.css']
})

export class Cardiac implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}