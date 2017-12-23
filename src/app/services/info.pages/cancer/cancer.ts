import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../common.service';

@Component({
    selector: 'cancer',
    templateUrl: './cancer.html',
    styleUrls: ['../../services.css']
})

export class Cancer implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}