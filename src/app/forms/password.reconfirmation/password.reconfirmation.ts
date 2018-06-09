import { Component } from '@angular/core';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { Password } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';

@Component({
    selector: 'about-india',
    templateUrl: './password.reconfirmation.html',
})

export class PasswordReconfirmation {
    reconfirmation: Password;
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService) {
        this.reconfirmation = new Password();
    }

    confirmPassword(reconfirmation) {
        this._commonService.startBlockUI('Loading');
        this._apiService.post(ServiceEndPoints.ReconfirmPassword, reconfirmation).subscribe(res => {
            this._commonService.stopBlockUI();
            this._commonService.notificationMessage(res.json(), true);
            this.reconfirmation = {
                password: '',
                confirm_password: ''
            },
                err => {
                    this._commonService.stopBlockUI();
                    this._commonService.notificationMessage("Internal server error, try again", false);
                }
        });

    }
}
