import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
    selector: 'ivf',
    templateUrl: './ivf.html',
    styleUrls: ['../../services.css']
})

export class IVF implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}