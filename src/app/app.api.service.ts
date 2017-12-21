import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail } from './app.model';

@Injectable() export class CommonAPIService {
    public ApiUrl = 'https://api.github.com/gists/';
    userDetail: UserDetail;
    constructor(private http: Http) { 
        this.userDetail = new UserDetail();
    }

    // get(endpoint: string): Observable<any> {
    //     return this.http.get(this.ApiUrl + endpoint).map(res => 
    //         res.json()
    //     );

    // }


    get(): Observable<any> {
        return this.http
            .get('https://api.github.com/gists/public')
            .map((res: Response) => res.json());
    }

    // post(endpoint: string, data: any): Observable<any> {
    //     debugger;
    //     return this.http.post(this.ApiUrl + endpoint, data).map(res => {
    //         res.json()});
    // }

    post(endpoint: string, data: any): Observable<any> {
        debugger;
        return this.http.post('https://elite-web.slack.com/messages/C8DHQUJ9W/', data).map(res => {
            res.json()
        });
    };

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
      }

  

}
