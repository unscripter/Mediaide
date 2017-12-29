import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service'
import { Router } from '@angular/router';

@Component({
    selector: 'estimation',
    templateUrl: './estimation.html',
    styleUrls: ['./estimation.css']
})

export class GetEstimation {
    estimateDetails: any;
    totalDays: number;
    constructor(private _commonService: CommonService, private router: Router) {
        let estimate = this._commonService.getFromSessionStorage('estimate');
        this.estimateDetails = JSON.parse(estimate);
        this.totalDays = parseInt(this.estimateDetails.no_of_days_in_hospital + this.estimateDetails.no_of_days_out_hospital);
        // this.clearStorageData();
    }

    // clearStorageData() {
    //     this._commonService.clearFromSessionStorage('estimate');
    // }
}