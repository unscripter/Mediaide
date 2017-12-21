import { Injectable } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LogInData, TokenStruct } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';

@Injectable()
export class UserLoginService {
    constructor(private _commSvc: CommonService,private _apiSvc: CommonAPIService) {
    }

    logIn(loginData: LogInData){
        return this._apiSvc.post(ServiceEndPoints.userRegister, loginData)
        .subscribe(res => {
          debugger;
          console.log("RES", res)
            if(loginData.keepLoggedIn){
            //set the cookie of the user and set the login status true 
             }
        },
        err => {
          console.log('ERR', err);
          this._apiSvc.handleError(err)
        }); 
    }

    logOut(){
        // set login status false and if keepLoggedIn is false the remove cookie also

    }
    
}