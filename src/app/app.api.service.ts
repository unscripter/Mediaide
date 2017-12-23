import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { CookieService } from 'ngx-cookie';
import { CommonService } from './common.service'
import { UserDetail } from './app.model';

@Injectable() export class CommonAPIService {
    public ApiUrl = 'http://192.168.1.9:8000/';
    userDetail: UserDetail;
    constructor(private http: Http, private _cmnSvc: CommonService) { 
        this.userDetail = new UserDetail();
    }

    // get(endpoint: string): Observable<any> {
    //     return this.http.get(this.ApiUrl + endpoint).map(res => 
    //         res.json()
    //     );

    // }
    getCookie(){
        this._cmnSvc.getCookie();
    }


    get(endpoint: string): Observable<any> {
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .get(this.ApiUrl + endpoint);
    }

    // post(endpoint: string, data: any): Observable<any> {
    //     debugger;
    //     return this.http.post(this.ApiUrl + endpoint, data).map(res => {
    //         res.json()});
    // }

    post(endpoint: string, data: any): Observable<any> {
        // debugger;
        const headers = new Headers({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.ApiUrl + endpoint, data, options);
    };  

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
      }

  

}
