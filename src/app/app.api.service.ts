import { Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail } from './app.model';

@Injectable() export class CommonAPIService {
    public ApiUrl = 'http://localhost:8000';
    constructor(private http: Http) { }

    // Get Access token from the cookies
    getCookie() {
        // return this._cookieService.getObject('accessTokenObj').access_token;
    }

    get(endpoint: string): Observable<any> {
        const headers = new Headers({'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers});
        return this.http.get(this.ApiUrl + endpoint, options);
    }

    post(endpoint: string, data: any): Observable<any> {
        const headers = new Headers({'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers});
        const response$ = this.http.post(this.ApiUrl + endpoint, data, options);
        return response$;
    }

    getUserDetails(tokn: any): Observable<any> {
        const headers = new Headers({'AccessToken': tokn, 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers});
        const data$ = this.http.post('userapiaddress', { 'AccessToken': tokn }, options)
                      .map(function(res){
                          this.userDetail = res.json();
                      });
        return data$;
     }
}
