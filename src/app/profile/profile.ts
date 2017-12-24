import { Component} from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
})

export class UserProfile {
    userProfileData: any;
    checkupDoc: any;
    greeting: string;
    constructor(private _commonService: CommonService) {
        debugger;
        if(this._commonService.getFromSessionStorage('userProfileData') && this._commonService.getCookie('access_token')){
        let userData = this._commonService.getFromSessionStorage('userProfileData');
        this.userProfileData =JSON.parse(userData).data;
        this.greeting = this._commonService.getGreetings();

    }
}
    checkUp(){
        this.checkupDoc = '';

    }

}
