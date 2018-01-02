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
    noOfPeople: [{type: string, number: number}];
    estimatedData: any;
    treatment: any;

    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.quotationData = new QuotationData();
        this.noOfPeople = [{'type': 'Patient+1 Attendent', 'number': 1}, {'type': 'Patient+2 Attendent', 'number': 2}, {'type': 'Patient+3 Attendent', 'number': 3},{'type': 'Patient+4 Attendent', 'number': 4}];
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
        let parsedData = parseInt(selectedData.patients);
        selectedData.patients = parsedData;
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
        if (this.quotationData.country && this.quotationData.patients && this.quotationData.treatment) {
            this.postEstimateDetails(selectedData);
        }
        else {
            this._commonService.notificationMessage("Fill all the details then, try to fetch", false);
        }
    }

    getEstimateDetails() {
        this._commonService.startBlockUI('Loading');
        return this._apiService.get(ServiceEndPoints.GetAQuote)
            .subscribe(res => {
                this._commonService.stopBlockUI();
                let jsonData = res.json();
                this.countryList = jsonData.country;
                this.treatmentType = jsonData.treatment;
                this.facilitiesList = jsonData.facilities;
            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("Internal server error", false);
            });
    }
}