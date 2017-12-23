import { Injectable, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LogInData, options, isAuthorized } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';
import { window } from 'rxjs/operator/window';
import { Router } from '@angular/router'

@Injectable()
export class UserLoginService implements OnInit {
    loginData: LogInData;
    isAuthorized: boolean;
    keepLoggedInStatus: boolean;
    private options = options
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.loginData = new LogInData();
        this.isAuthorized = isAuthorized;
    }

    ngOnInit() {
        // if (this.loginData.keepLoggedIn) {
        //     this.keepLoggedIn();
        // }
        // else {
        //     this.clearUserData('userProfileData');
        // }
    }

    logIn(loginData: LogInData) {
        debugger;
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(ServiceEndPoints.LoginUser, loginData)
            .subscribe(res => {
                this._commonService.setCookie(res._body);
                this._commonService.stopBlockUI();
                //can add other condition for bettter transition
                if (res._body) {
                    this.keepLoggedIn()
                    this._commonService.notificationMessage("success in login, redirecting to user profile", true);
                    let userData = { 'data': res._body }
                    this.storeUserData(userData);
                    setTimeout(this.router.navigate(['/profile']), 3000);
                    this.keepLoggedInStatus = this.loginData.keepLoggedIn;
                }
                else {
                    this._commonService.notificationMessage("success in login, redirecting to homepage", true);
                    setTimeout(this.router.navigate(['/home']), 2000)
                }
            },
            err => {
                this._apiService.handleError(err);
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(err.statusText, false);
            });
    }

    keepLoggedIn() {
        this.isAuthorized = true;
    }

    storeUserData(profileData) {
        this._commonService.storeInSessionStorage('userProfileData', profileData);
    }

    clearUserData(key: string) {
        this._commonService.clearFromSessionStorage(key);
    }

    logOut() {
        if (this.keepLoggedInStatus) {
            this._commonService.notificationMessage("logged out successfully", true);
        }
        else {
            sessionStorage.clear();
            this.clearUserData('userProfileData');
            this._commonService.deleteCookie();
            this.router.navigate(['/login'])
            this._commonService.notificationMessage("logged out successfully", true);          
        }
    }
    
    // setStatusForHomePage(this.keepLoggedInStatus,this.isAuthorized){

    }

}