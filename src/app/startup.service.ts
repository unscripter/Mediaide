import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { UserDetail, TokenStruct } from './app.model';
import { CookieService } from 'ngx-cookie-service';
// import * as moment from 'moment';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';

@Injectable()
export class StartupService {
    private userDetail = new UserDetail();
//     requestsArr = [];
    private apiUrl = 'http://192.168.1.8:8000/';
    private signInUrl = 'http://localhost:4200/registration';
//     public toknObj = new TokenStruct();
//     public currentUrl: string;
//     private key = 1;
//     @BlockUI() blockUI: NgBlockUI;

    constructor(private http: Http, private _cookieService: CookieService) { }

//     load(): Promise<any> {
//         this.blockUI.start('Setting Up your application');
//         this.currentUrl = window.location.href;
//         this.setCommonUrlParameters(this.currentUrl);
//         this.retrieveToken();
//         const headers = new Headers({ 'AccessToken': this.toknObj.value, 'Content-Type': 'application/json' });
//         const options = new RequestOptions({ headers: headers });
//         // if (this.toknObj.isValueSet()) {
//         return this.http
//             .post(this.getApiUrl() + '/UserBasicDetails.json',
//             { 'AccessToken': this.toknObj.value }, options)
//             .map((res: Response) => res.json())
//             .toPromise()
//             .then((data: any) => this.mapData(data))
//             .catch((err: any) => {
//                 this.handleError(err);
//                 this.blockUI.stop();
//                 window.location.href = this.signInUrl;
//                 Promise.resolve();
//             });
//     }

//     mapData(response: any) {
//         const userObj = this.toUserData(response);
//         this.setUserObject(userObj);
//         this.blockUI.stop();
//     }

//     toUserData(r: any): UserDetail {
//         const userData = <UserDetail>({
//             name: JSON.stringify(r.name),
//             email: r.email,
//             password: r.password,
//         });
//         return userData;
//     }

//     private setUserObject(obj: UserDetail) {
//         this.userDetail.setUserDetail(obj);
//     }

//     private handleError(error: any) {
//         const errorMsg = error.message || `There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
//         return Observable.throw(errorMsg);
//     }

//     retrieveToken() {
//         this.toknObj.detail = this.currentUrl.split('access_token=')[this.key];
//         const currTime: any = moment();
//         const toknExpires = this.getCookieExpires();
//         if (this.getCookie() && toknExpires && currTime.diff(moment(toknExpires, 'DD-MM-YYYY HH:mm')) < 0) {
//             this.toknObj.value = this.getCookie();
//             this.toknObj.expires = this.getCookieExpires();
//         } else if (this.toknObj.detail) {
//             this.toknObj.value = JSON.parse(decodeURIComponent(decodeURIComponent(this.toknObj.detail))).access_token;
//             this.toknObj.expires = JSON.parse(decodeURIComponent(decodeURIComponent(this.toknObj.detail))).expires;
//             this.setCookie(this.toknObj);
//             // console.log('cookie expires in: ' + this.toknObj.expires);
//         } else {
//             window.location.href = this.signInUrl;
//         }
//     }

    setCommonUrlParameters(currentUrl: string) {
        const authUrl = 'http://localhost:4200/login';
        const localhostUrl = 'http://localhost:4200/';
        const liveUrl = '';

        if (this.forceProductionAPIHook()) {
            //server path's
            this.apiUrl = ''
        }
    }

    forceProductionAPIHook() {
        return false;   // For default pick
        //return true;  // For force Production test
    }

    getUserData(): UserDetail {
        return this.userDetail;
    }

    getApiUrl() {
        return this.apiUrl;
    }

    getSignInUrl() {
        return this.signInUrl;
    }

    getCookie() {
        if (this._cookieService.get('access_token')) {
            return this._cookieService.get('access_token');
        } else {
            return null;
        }
    }

//     getCookieExpires() {
//         if (this._cookieService.get('token_expires')) {
//             return this._cookieService.get('token_expires');
//         } else {
//             return null;
//         }
//     }

//     private setCookie(tknObj: TokenStruct) {
//         this._cookieService.set('access_token', tknObj.value);
//         this._cookieService.set('token_expires', tknObj.expires);
//     }
}
