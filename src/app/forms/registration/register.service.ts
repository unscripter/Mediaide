import { Injectable } from '@angular/core';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { CommonAPIService } from '../../app.api.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail, TokenStruct } from '../../app.model';


@Injectable()
export class UserRegisterService {
  userData: UserDetail;
  constructor(private _commanService: CommonService, private http: Http, private _apiService: CommonAPIService) {
  }

  //get list of all users
  // fetch() {
  //   return this._apiService.get(ServiceEndPoints.GetUser)
  //     .subscribe(r => {
  //       debugger;
  //       console.log("RES", r);
  //       this.userData = r;
  //     },
  //     e => {
  //       console.log('ERR', e);
  //     });
  // }

  setRegistrationDetails(userData: UserDetail) {
    this._commanService.startBlockUI('Loading');    
    return this._apiService.post(ServiceEndPoints.RegisterUser, userData)
      .subscribe(res => {
        this._commanService.stopBlockUI();   
        this._commanService.notificationMessage(res._body, true);
        this.userData = new UserDetail();        
      },
      err => {
        this._apiService.handleError(err);
        this._commanService.stopBlockUI();  
        this._commanService.notificationMessage(err.statusText, false);          
      });
  }
}
