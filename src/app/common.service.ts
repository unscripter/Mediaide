import { Injectable, ViewChild } from '@angular/core';
// import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { CookieService } from 'ngx-cookie-service';
import { StartupService } from './startup.service';
// import { HttpInterceptorService } from 'ng-http-interceptor';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

export class ServiceEndPoints {
    //put your static part of the url here e.g
    static userRegister = 'api/register';
    static RegisterAPI = 'register';    
}

@Injectable() export class CommonService {

    constructor(
        private _startUpSvc: StartupService,
        public router: Router
    ) {}

    getApiUrl() {
        return this._startUpSvc.getApiUrl();
    }


}
