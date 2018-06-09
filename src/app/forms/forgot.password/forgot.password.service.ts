import { Injectable, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { forgotPasswordData } from '../../app.model';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints } from '../../common.service';
import { window } from 'rxjs/operator/window';
import { Router } from '@angular/router'

@Injectable()
export class ForgotPasswordService implements OnInit {
    logInStatus: boolean;
    options: any;
    forgotpassword: any;
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
        this.logInStatus = false;
    }

    ngOnInit() {
        this.logInStatus = false;
    }

    setForgotPasswordDetails(forgotPassword: any) {
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(ServiceEndPoints.ForgotPassword, forgotPassword)
            .subscribe(res => {
                this.forgotpassword.email = '';
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(res._body, true);

            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(err.statusTex, false);
            });
    }

}