import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
})

export class UserProfile implements OnInit {
    userProfileData: any;
    constructor(private _commonService: CommonService) {
        debugger;
        let userData = this._commonService.getFromSessionStorage('userProfileData');
        // let userProfile =JSON.parse(JSON.parse(userData));        
        console.log("USER", this.userProfileData);
        debugger;
        // this.userProfileData = userProfile.data;
    }
    ngOnInit() {
        this._commonService.scrollToTop();
    }

}
