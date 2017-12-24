import { Component, OnInit, Optional } from '@angular/core';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { Password, options } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';

@Component({
    selector: 'about-india',
    templateUrl: './password.reconfirmation.html',
})

export class PasswordReconfirmation implements OnInit {
    private reconfirmation: Password;
    private options: any
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService) {
        this.options = options;
        this.reconfirmation = new Password();
    }
    ngOnInit() {
        this._commonService.scrollToTop();
        this._commonService.scrollToTop();
    }
    confirmPassword(reconfirmation) {
        this._commonService.startBlockUI('Loading');
        this._apiService.post(ServiceEndPoints.ReconfirmPassword, reconfirmation).subscribe(res => {
            this._commonService.stopBlockUI();
            this._commonService.notificationMessage(res._body, true);
            this.reconfirmation = {
                password: '',
                confirm_password: ''
            },
                err => {
                    let error = this._apiService.handleError(err);
                    this._commonService.stopBlockUI();
                    this._commonService.notificationMessage(err.statusText, false);
                }
        });

    }
}
