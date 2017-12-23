import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'featured-services',
    templateUrl: './featured.services.html',
    styleUrls: ['../services.css']
})

export class FeaturedServices implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}