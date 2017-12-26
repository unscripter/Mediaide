import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ServiceEndPoints } from '../common.service';
import { CommonService } from '../common.service';
import { CommonAPIService } from '../app.api.service';
import { QuotationData } from '../app.model';
import { Router } from '@angular/router';

@Component({
    selector: 'quotation',
    templateUrl: './quotation.html',
})
export class GetAQuote implements OnInit {
    quotationData: any;
    countryList: string[];
    treatmentType: any;
    facilitiesList: any;
    noOfPeople: string[];
    estimatedData: any;
    treatment: any;

    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.quotationData = new QuotationData();
        this.noOfPeople = ['1', '2', '3', '4'];
    }
    ngOnInit() {
        this.getEstimateDetails();
    }

    getValue(item) {
        var index = this.quotationData.facilities.indexOf(item);
        if (index != -1) {
            this.quotationData.facilities.splice(index, 1);
        } else {
            this.quotationData.facilities.push(item);
        }
    }

    postEstimateDetails(selectedData) {
        this._commonService.stopBlockUI();
        debugger;
        return this._apiService.post(ServiceEndPoints.GetAQuote, selectedData)
            .subscribe(res => {
                const data = res.json();
                this._commonService.storeInSessionStorage('estimate', data);
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("Your cost estimation is, available now", true);
                this.router.navigate(['/quotation/estimate']);
                this.estimatedData = res._body;
            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("Failed to load data, try reloading", false);
                this._apiService.handleError(err)
            });
    }
    getEstimation(selectedData) {
        debugger;
        if (this.quotationData.country && this.quotationData.patients && this.quotationData.treatment) {
            debugger;
            this.postEstimateDetails(selectedData);
        }
        else {
            debugger;
            this._commonService.notificationMessage("Fill all the details then, try to fetch", false);
        }
    }

    getEstimateDetails() {
        this._commonService.startBlockUI('Loading');
        return this._apiService.get(ServiceEndPoints.GetAQuote)
            .subscribe(res => {
                this._commonService.stopBlockUI();
                this.countryList = res.json().country;
                this.treatmentType = res.json().treatment;
                this.facilitiesList = res.json().facilities;
            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(err.statusText, false);
            });
    }
}