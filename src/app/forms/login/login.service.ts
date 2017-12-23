import { Injectable, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LogInData, options } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';
import { window } from 'rxjs/operator/window';
import { Router } from '@angular/router'

@Injectable()
export class UserLoginService implements OnInit {
    loginData: LogInData;
    isAuthorized: any;
    private options = options
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.loginData = new LogInData();
        this.isAuthorized = this._commonService.getCookie('isAuthorized');
    }

    ngOnInit() {

    }

    logIn(loginData: LogInData) {
        debugger;
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
                    setTimeout(() => {
                        this.router.navigate(['/profile'])
                        location.reload();
                    }, 1);
                }
                else {
                    this._commonService.notificationMessage("Something went Wrong, redirecting to homepage", false);
                    this._commonService.stopBlockUI();
                    setTimeout(this.router.navigate(['/home']), 1)
                }
            },
            err => {
                this._apiService.handleError(err);
                this._commonService.stopBlockUI();
                // this._commonService.notificationMessage(err.statusText, false);
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