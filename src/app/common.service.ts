import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { CookieService } from 'ngx-cookie-service';
import { StartupService } from './startup.service';
// import { HttpInterceptorService } from 'ng-http-interceptor';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { TokenStruct } from './app.model'
import { Headers, Http, Response, RequestOptions } from '@angular/http';


export class ServiceEndPoints {
    //put your static part of the url here e.g
    static userRegister = 'api/register';
    static RegisterAPI = 'login';
}

@Injectable() export class CommonService {

    constructor(
        private _startUpSvc: StartupService,
        private _CookieService: CookieService,
        public router: Router,
        private http: Http
    ) { }

    getApiUrl() {
        return this._startUpSvc.getApiUrl();
    }

    getNotificationOption() {
        const options = {
            position: ['bottom', 'right'],
            timeOut: 0,
            lastOnBottom: true,
        };
        return options;
    }

    private setCookie(tknObj: TokenStruct) {
        this._CookieService.set('access_token', tknObj.value);
        this._CookieService.set('token_expires', tknObj.expires);
    };

    getCookie() {
        if (this._CookieService.get('access_token')) {
            return this._CookieService.get('access_token');
        } else {
            return null;
        }
    };

    getCookieExpires() {
        if (this._CookieService.get('token_expires')) {
            return this._CookieService.get('token_expires');
        } else {
            return null;
        }
    };

    setDefaultURL(URL) {
        localStorage.setItem('homePage', URL);
    };

    getDefaultURL() {
        return localStorage.getItem('homePage');
    };

    alertCheck(e: any) {
        window.alert(e);
    };

    getGreetings() {
        let greeting = 'Good Morning';
        const currTime: any = moment().hour();
        if (currTime >= 0 && currTime <= 12) {
            greeting = 'Good Morning';
        } else if (currTime >= 12 && currTime <= 16) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Good Evening';
        }
        return greeting;
    };

    private handleError(error: any) {
        const errorMsg = error.message || `There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
        return Observable.throw(errorMsg);
    }

    get(endpoint: string, isBlockUI: boolean = true): Observable<any> {
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .get(endpoint, options)
            .catch(this.handleError);
    }

    post(endpoint: string, data: any/*, isBlockUI: boolean = true*/): Observable<any> {
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .post(endpoint, data, options)
            .catch(this.handleError);
    };


}
