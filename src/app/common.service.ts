import { Injectable, ViewChild } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail, TokenStruct } from './app.model';
import { CookieService } from 'ngx-cookie-service';
import { StartupService } from './startup.service';
import { HttpInterceptorService } from 'ng-http-interceptor';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

export class ServiceEndPoints {
    //put your static part of the url here e.g
    static userRegister = 'api/register';
    static RegisterAPI = 'register';    
}

@Injectable() export class CommonService {

    public userDetail: UserDetail;
    private blockUiCount = 0;
    requestsArr = [];
    @BlockUI() blockUI: NgBlockUI;
    constructor(private http: Http, private _cookieService: CookieService,
        private httpInterceptor: HttpInterceptorService,
        private _startUpSvc: StartupService,
        public router: Router
    ) {

        this.httpInterceptor.request().addInterceptor((data, method) => {
            this.requestsArr.push({
                method: method,
                url: data[0]
            });
            return data;
        });

        this.httpInterceptor.response().addInterceptor((res, method) => {
            return res.do(null,
                e => {
                    if (e.status === 403 || e.status === 404 || e.status === 401) {
                        window.location.href = this.getSignInUrl();
                        // this.alertCheck(e.statusText);
                    }
                }
            );
        });
    }

    /* Returns cookie string */
    getCookie() {
        if (this._cookieService.get('access_token')) {
            return this._cookieService.get('access_token');
        } else {
            return null;
        }
    }

    /* Block UI management*/
    incrementBlockUICount() {
        this.blockUiCount = this.blockUiCount + 1;
    }

    decrementBlockUICount() {
        if (this.blockUiCount !== 0 || this.blockUiCount > 0) {
            this.blockUiCount = this.blockUiCount - 1;
        }
    }

    getBlockUICount() {
        return this.blockUiCount;
    }

    stopBlockUI() {
        this.decrementBlockUICount();
        const count = this.getBlockUICount();
        if (count === 0) {
            this.blockUI.stop();
        }
    }

    startBlockUI(message: any) {
        message = 'Loading ...'
        this.incrementBlockUICount();
        const countBeforeStart = this.getBlockUICount();
        this.blockUI.start(message);
        setTimeout( () => {
            const currentBlockUiCount = this.getBlockUICount();
                if ( currentBlockUiCount !== 0 && countBeforeStart === currentBlockUiCount) {
                    this.blockUI.update('be patient ... Its taking a while');
                    setTimeout( () => {
                        const currentBlockUiCountL = this.getBlockUICount();
                        if (currentBlockUiCountL !== 0 && countBeforeStart === currentBlockUiCountL) {
                            this.blockUI.update('Its taking longer than expected ...');
                        }
                    }, 10000);
                }
        }, 10000);
    }

    getNotificationOption() {
        const  options = {
            position: ['bottom', 'right'],
            timeOut: 0,
            lastOnBottom: true,
        };
        return options;
    }

    getCookieExpires() {
        if (this._cookieService.get('token_expires')) {
            return this._cookieService.get('token_expires');
        } else {
            return null;
        }
    }

    getApiUrl() {
        return this._startUpSvc.getApiUrl();
    }

    getSignInUrl() {
        return this._startUpSvc.getSignInUrl();
    }

    setCookie(tknObj: TokenStruct) {
        this._cookieService.set('access_token', tknObj.value);
        this._cookieService.set('token_expires', tknObj.expires);
    }

    /* Returns object of UserDetailObject */
    getUserObject() {
        this.userDetail = this._startUpSvc.getUserData();
        return this.userDetail;
    }

    setDefaultURL(URL) {
        localStorage.setItem('home', URL);
    }

    getDefaultURL() {
     return localStorage.getItem('home');
    }

    /* Only gets called in app Component and fills the UserDetail object */
    private handleError(error: any) {
        const errorMsg = error.message || `There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
        return Observable.throw(errorMsg);
    }

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
    }
    /*common get call*/
    get(endpoint: string, isBlockUI: boolean = true): Observable<any> {
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const response$ = this.http
            .get(endpoint, options)
            .catch(this.handleError);
        return response$;
    }

    mapHttpData(response: any) {
        // this.blockUI.stop();
        return response.json();
    }

    // getDate(date: any) {
    //     const d = new Date(parseInt(date.replace('/Date(', '').replace(')/', ''), 10))
    //     return new Date(d)
    // };

    /*common post call*/
    post(endpoint: string, data: any/*, isBlockUI: boolean = true*/): Observable<any> {
        const response$ = this.http
            .post(endpoint, data)
            .catch(this.handleError);
        return response$;
    };
}
