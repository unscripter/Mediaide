import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ServiceEndPoints } from '../common.service';
import { CommonService } from '../common.service';
import { CommonAPIService } from '../app.api.service';
import { options } from '../app.model';

@Component({
    selector: 'quotation',
    templateUrl: './quotation.html',
})
export class GetAQuote implements OnInit {
    quotationData: any;
    private countryList: any;
    private treatmentType: any;
    private facilitiesList: any;
    private noOfPeople: string[];
    private options: any;
    private estimatedData: any;

    constructor(private _commonService: CommonService, private _apiService: CommonAPIService) {
        this.noOfPeople = ['1', '2', '3', '4'];
        this.options = options;
    }
    ngOnInit() {
        this.getEstimateDetails();
        this._commonService.scrollToTop();
        this.postEstimateDetails('abc');
    }

    postEstimateDetails(selectedData) {
        this._commonService.stopBlockUI();
        return this._apiService.post(ServiceEndPoints.GetAQuote, selectedData)
            .subscribe(res => {
                console.log("RESPONSE",res);
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("Redirecting to Estimation", true);
                //All the Estimated Data to be shown
                this.estimatedData = res._body;
            },
            err => {
                console.log('ERR', err);
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("Failed to load data, try reloading", false);
                this._apiService.handleError(err)
            });
    }

    getEstimateDetails() {
        this._commonService.startBlockUI('Loading');
        return this._apiService.get(ServiceEndPoints.GetAQuote)
            .subscribe(res => {
                this._commonService.stopBlockUI();
                // this._commonService.notificationMessage(res._body, true);
                console.log("response", res._body);
                this.countryList = res._body.country;
                console.log("countryList", this.countryList);
                this.treatmentType = res._body['treatment'];
                console.log("treatmentType", this.treatmentType);
                this.facilitiesList = res._body.facilities;
                console.log("facilities", this.facilitiesList);
            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(err.statusText, false);
                console.log('ERR', err);
            });
    }
}