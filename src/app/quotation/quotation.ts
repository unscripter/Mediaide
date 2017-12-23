import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ServiceEndPoints } from '../common.service';
import { CommonService } from '../common.service';
import { CommonAPIService } from '../app.api.service';


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

    list: any;
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService) {
        this.noOfPeople = ['1','2','3','4'];
    }
    ngOnInit() {
        this.getEstimateDetails();
        // this.postEstimateDetails('abc');
    }

    postEstimateDetails(selectedData){
        return this._apiService.post(ServiceEndPoints.GetAQuote, selectedData)
        .subscribe( res => {
        },
        err => {
          console.log('ERR', err);
          this._apiService.handleError(err)
        }); 
    }

    getEstimateDetails() {
        return this._apiService.get(ServiceEndPoints.GetAQuote)
          .subscribe(res => {
              console.log("response",res._body);
              this.countryList = res._body.country;
              console.log("countryList",this.countryList);
              this.treatmentType = res._body['treatment'];
              console.log("treatmentType",this.treatmentType);
              this.facilitiesList = res._body.facilities;
              console.log("facilities",this.facilitiesList);
          },
          e => {
            console.log('ERR', e);
          });
      }
}