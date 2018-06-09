import { Injectable } from '@angular/core';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { CommonAPIService } from '../../app.api.service';
import { UserDetail } from '../../app.model';


@Injectable()
export class UserRegisterService {
  userData: UserDetail;
  constructor(private _commanService: CommonService, private _apiService: CommonAPIService) {
  }

  //get list of all users
  // fetch() {
  //   return this._apiService.get(ServiceEndPoints.GetUser)
  //     .subscribe(r => {
  //       this.userData = r;
  //     },
  //     e => {
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
        this._commanService.stopBlockUI();
        this._commanService.notificationMessage("Internal server error, try again"
          , false);
      });
  }
}
