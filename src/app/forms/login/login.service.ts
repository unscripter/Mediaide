import { Injectable, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LogInData, TokenStruct, options } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';
import { window } from 'rxjs/operator/window';
import { Router } from '@angular/router'
// import { read } from 'fs';

@Injectable()
export class UserLoginService implements OnInit {
    loginConditionData: any;
    userSpecificProfileData: any;
    isAuthorized: boolean;
    private options = options
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.loginConditionData = '';
        this.userSpecificProfileData = ''
    }

    ngOnInit() {
        if (this.loginConditionData.keepLoggedIn) {
            this.keepLoggedIn();
        }
        else {
            this.isAuthorized = false;
            this.clearUserData('userProfileData');
        }
    }

    logIn(loginData: LogInData) {
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(ServiceEndPoints.LoginUser, loginData)
            .subscribe(res => {
                this._commonService.setCookie(res._body);
                this.isAuthorized = true;
                if (this.isAuthorized) {
                    this.router.navigate(['/profile']);
                }
                const tempData = {
                    'username': res.name,
                    'email': res.email,
                    'dob': res.dob,
                    'address': res.address,
                    'gender': res.gender,
                    'phone': res.phone,
                    'country': res.country,
                    'id': res.id
                }
                this.storeUserData(tempData);
                this._commonService.notificationMessage("success in login", true);
                this._commonService.stopBlockUI();
            },
            err => {
                console.log('ERR', err);
                this._apiService.handleError(err);
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("sorry something went wrong", false);
            });
    }

    keepLoggedIn() {
        this.isAuthorized = true;
    }

    storeUserData(profileData) {
        this._commonService.storeInLocalStorage('userProfileData', profileData);
    }

    clearUserData(key: string) {
        this._commonService.clearFromLocalStorage(key);
    }

    logOut() {
        if (this.loginConditionData.keepLoggedIn) {
            this.loginConditionData.keepLoggedIn = false;
            localStorage.clear();
        }
        else {
            localStorage.clear();
        }
    }

}