import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
})

export class UserProfile implements OnInit {
    userProfileData: any;
    checkupDoc: any;
    constructor(private _commonService: CommonService) {
        debugger;
        if(this._commonService.getFromSessionStorage('userProfileData') && this._commonService.getCookie('access_token')){
        let userData = this._commonService.getFromSessionStorage('userProfileData');
        let userProfile = userData;
        console.log("SSSSSSSSSSSSSSSSS",typeof(userData));
        // let userProfile =JSON.parse(JSON.parse(userData));        
        console.log("USER", this.userProfileData);
        debugger;
        this.userProfileData = userProfile;
    }
}
    ngOnInit() {
        this._commonService.scrollToTop();
    }
    checkUp(){
        this.checkupDoc = '';

    }

}
