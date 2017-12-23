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
import { locale } from 'moment';
import { NotificationsService } from 'angular2-notifications';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


export class ServiceEndPoints {
    //put your static part of the url here e.g
    static MedicalPackage = 'api/mediacal-package/';
    static VisaPage = 'api/country-visa/';
    static GetUser = 'api/get-user/';
    static RegisterUser = 'api/register/';
    static LoginUser = 'api/login/';
    static LogOut = 'api/logout/';
    static ResendConfirmation = 'api/resend-confirmation-mail/';
    static UserEnquiry = 'api/user-enquiry/';
    static ContactUs = 'api/contact-us/';
    static GetAQuote = 'api/get-estimate/';
    static ForgotPassword = 'api/forgot-password/'
 }

@Injectable() export class CommonService {
    private blockUiCount = 0;
    @BlockUI() blockUI: NgBlockUI;
    
    constructor(
        private _startUpSvc: StartupService,
        private _CookieService: CookieService,
        public router: Router,
        private http: Http,
        private _nofticationService: NotificationsService
    ) { }

    getApiUrl() {
        return this._startUpSvc.getApiUrl();
    }

    //Block UI Management 

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
                    this.blockUI.update('Be patient ... Its taking a while');
                    setTimeout( () => {
                        const currentBlockUiCountL = this.getBlockUICount();
                        if (currentBlockUiCountL !== 0 && countBeforeStart === currentBlockUiCountL) {
                            this.blockUI.update('Its taking longer than expected ...');
                        }
                    }, 10000);
                }
        }, 10000);
    }



    // isLoggedIn(logInStatus){
    //     if(logInStatus)
    //     {

    //     }

    // }

    getNotificationOption() {
        const options = {
            position: ['bottom', 'right'],
            timeOut: 0,
            lastOnBottom: true,
        };
        return options;
    }

    notificationMessage(message: any, isSuccess: boolean) {
        if (isSuccess) {
            this._nofticationService.success(
                'Success',
                message,
                {
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 100,
                    timeOut: 3000
                }
            )
        } else {
            this._nofticationService.error(
                'Error',
                message,
                {
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 100,
                    timeOut: 3000
                }
            )
        }
    }

    setCookie(tknObj: any) {
        console.log("TOKEN",tknObj)
        this._CookieService.set('access_token', tknObj);
        // this._CookieService.set('token_expires', tknObj.expires);
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

    storeInLocalStorage(key: string, value: any){
        localStorage.setItem(key, value)
    }

    clearFromLocalStorage(key: string){
        localStorage.removeItem(key);
    }

    getFromLocalStorage(key: string){
        localStorage.getItem(key)
    }

    clearLocalStorage(){
        localStorage.clear();
    }

    // setDefaultURL(URL) {
    //     localStorage.setItem('homePage', URL);
    // };

    // getDefaultURL() {
    //     return localStorage.getItem('homePage');
    // };

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
