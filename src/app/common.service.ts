import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { StartupService } from './startup.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
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
    static ForgotPassword = 'api/forgot-password/';
    static ReconfirmPassword = 'api/reconfirm';
}

@Injectable() export class CommonService {
    private blockUiCount = 0;
    @BlockUI() blockUI: NgBlockUI;
    private isAuthorized: boolean;

    constructor(
        private _startUpSvc: StartupService,
        private _CookieService: CookieService,
        public router: Router,
        private http: Http,
        private _nofticationService: NotificationsService
    ) { }

    changeisAuthorizedCondition(condition) {
        this.isAuthorized = condition;
        return this.isAuthorized;
    }

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
        setTimeout(() => {
            const currentBlockUiCount = this.getBlockUICount();
            if (currentBlockUiCount !== 0 && countBeforeStart === currentBlockUiCount) {
                this.blockUI.update('Be patient ... Its taking a while');
                setTimeout(() => {
                    const currentBlockUiCountL = this.getBlockUICount();
                    if (currentBlockUiCountL !== 0 && countBeforeStart === currentBlockUiCountL) {
                        this.blockUI.update('Its taking longer than expected ...');
                    }
                }, 5000);
            }
        }, 5000);
    }

    notificationMessage(message: any, isSuccess: boolean) {
        if (isSuccess) {
            this._nofticationService.success(
                'Success',
                message,
                {
                    showProgressBar: true,
                    pauseOnHover: true,
                    maxLength: 100,
                    timeOut: 1000
                }
            )
        } else {
            this._nofticationService.error(
                'Error',
                message,
                {
                    showProgressBar: true,
                    pauseOnHover: true,
                    maxLength: 100,
                    timeOut: 1000
                }
            )
        }
    }

    setCookie(key, tknObj: any) {
        this._CookieService.set(key, tknObj);
        // this._CookieService.set('token_expires', tknObj.expires);
    };

    getCookie(key) {
        if (this._CookieService.get(key)) {
            return this._CookieService.get(key);
        }
        else { return null; }
    };

    getCookieExpires() {
        if (this._CookieService.get('token_expires')) {
            return this._CookieService.get('token_expires');
        }
        else { return null; }
    };

    deleteCookie() {
        this._CookieService.deleteAll();
    }

    storeInSessionStorage(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    clearFromSessionStorage(key: string) {
        sessionStorage.removeItem(key);
    }

    getFromSessionStorage(key: string) {
        if (sessionStorage.getItem(key)) { return sessionStorage.getItem(key); }
        // else { this.notificationMessage('Something went wrong', false); }
    }

    clearSessionStorage() {
        sessionStorage.clear();
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
    };

    private handleError(error: any) {
        const errorMsg = error.message || `There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
        return Observable.throw(errorMsg);
    }

    scrollToTop() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
