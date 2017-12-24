import { Injectable, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Observable } from 'rxjs/Observable';
import { LogInData, options } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';
import { Router } from '@angular/router'
import { Header } from '../../shared/header/header';

@Injectable()
export class UserLoginService {
    loginData: LogInData;
    isAuthorized: any;
    private options = options
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.loginData = new LogInData();
        this.isAuthorized = this._commonService.getCookie('isAuthorized');
    }

    logIn(loginData: LogInData) {
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(ServiceEndPoints.LoginUser, loginData)
            .subscribe(res => {
                //can add other condition for bettter transition

                if (res.json().token) {
                    this._commonService.setCookie('access_token', res.json().token);
                    this._commonService.setCookie('isAuthorized', true);
                    this._commonService.stopBlockUI();
                    this._commonService.notificationMessage("success in login, redirecting to user profile", true);
                    const r = res.json();
                    let userData = { 'data': r }
                    this.storeUserData(userData);
                    Header.updateUserStatus.next(true); // here!
                    this.router.navigate(['/profile']);
                }
                else {
                    this._commonService.stopBlockUI();                    
                    this._commonService.notificationMessage("Something went Wrong, redirecting to homepage", false);
                    setTimeout(this.router.navigate(['/home']), 1)
                }
            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(err.statusText, false);
            });
    }

    Cookie(key) {
        this.isAuthorized = this._commonService.getCookie(key);
        return this.isAuthorized;
    }

    storeUserData(profileData) {
        this._commonService.storeInSessionStorage('userProfileData', profileData);
    }
}