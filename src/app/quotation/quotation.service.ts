// import { Injectable, OnInit } from '@angular/core';
// import { CommonService } from '../common.service';
// import { Headers, Http, Response, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { contactUsData } from '../app.model';
// import { CommonAPIService } from '../app.api.service';
// import { ServiceEndPoints } from '../common.service';
// import { window } from 'rxjs/operator/window';
// import { Router } from '@angular/router'

// @Injectable()
// export class GetQuotationEstimation implements OnInit{
    
//     constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
//     }

//     ngOnInit(){
//     }

//     postEstimateDetails(selectedData){
//         return this._apiService.post(ServiceEndPoints.VisaPage, selectedData)
//         .subscribe( res => {
//         },
//         err => {
//           console.log('ERR', err);
//           this._apiService.handleError(err)
//         }); 
//     }

//     getEstimateDetails() {
//         return this._apiService.get(ServiceEndPoints.VisaPage)
//           .subscribe(res => {
//           },
//           e => {
//             console.log('ERR', e);
//           });
//       }
    
// }