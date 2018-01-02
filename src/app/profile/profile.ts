import { Component, OnInit } from '@angular/core';
import { CommonService, ServiceEndPoints } from '../common.service';
import { Router } from '@angular/router';
import { editUserData } from '../app.model';
import { CommonAPIService } from '../app.api.service'

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
})

export class UserProfile {
    userProfileData: any;
    checkupDoc: any;
    greeting: string;
    isAuthorized: any;
    editUser: editUserData;
    constructor(private _commonService: CommonService, private router: Router, private _apiService: CommonAPIService) {
        if (this._commonService.getFromSessionStorage('userProfileData') && this._commonService.getCookie('access_token')) {
            let userData = this._commonService.getFromSessionStorage('userProfileData');
            this.userProfileData = JSON.parse(userData).data;
            this.greeting = this._commonService.getGreetings();
            this.isAuthorized = this._commonService.getFromSessionStorage("isAuthorized");
        }
        this.editUser = new editUserData();
    }
    submitUserDetails(userData) {
        this._apiService.post(ServiceEndPoints.RegisterUser, userData).subscribe(res => {
            this._commonService.notificationMessage("Information submitted successfully", true);
        },
            err => {
                this._commonService.notificationMessage("Something went wrong please try again", false);
            }
        )

    }

}
