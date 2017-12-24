import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
@Component({
    selector: 'post-care',
    templateUrl: './post.care.html',
    styleUrls: ['../services.css']
})

export class PostCare implements OnInit{
    constructor(private _commonService: CommonService){}
    ngOnInit()
{
    this._commonService.scrollToTop();
}
}