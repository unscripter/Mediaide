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
    private apiUrl = 'http://192.168.1.8:8000/';
    private signInUrl = 'http://localhost:4200/registration';

    constructor(private http: Http, private _cookieService: CookieService) { }

    getApiUrl() {
        return this.apiUrl;
    }
    // forceProductionAPIHook() {
    //     return false;   // For default pick
    //     // return true;  // For force Production test
    // }
    
    // if (this.forceProductionAPIHook()) {
    //     this.apiUrl = 'serverpath';
    // }

  
}
