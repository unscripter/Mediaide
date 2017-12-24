import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'medical-treatment',
    templateUrl: './medical.treatment.html',
    styleUrls: ['../services.css']
})

export class MedicalTreatment implements OnInit {
    constructor(private _commonService: CommonService) { }
    ngOnInit() {
        this._commonService.scrollToTop();
    }
}