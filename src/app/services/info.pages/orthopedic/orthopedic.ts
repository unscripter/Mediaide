import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
    selector: 'orthopedic',
    templateUrl: './orthopedic.html',
    styleUrls: ['../../services.css']
})

export class Orthopedic implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}