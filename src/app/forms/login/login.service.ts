import { Injectable } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail, TokenStruct } from '../../app.model';
import { loginData } from './login.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';

@Injectable()
export class UserLoginService {
    constructor(private _commSvc: CommonService,private _apiSvc: CommonAPIService) {
    }

    logIn(loginData: loginData){
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