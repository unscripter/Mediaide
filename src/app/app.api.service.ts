import { Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail } from './app.model';

@Injectable() export class CommonAPIService {
    public ApiUrl = 'http://192.168.1.8:8000/';
    constructor(private http: Http) { }

    get(endpoint: string): Observable<any> {
        const response$ = this.http.get(this.ApiUrl + endpoint).map(res => {
            res.json
        });
        return response$;
    }

    post(endpoint: string, data: any): Observable<any> {
        debugger;
        const response$ = this.http.post(this.ApiUrl + endpoint, data).map(res => {
            res.json});
        return response$;
    }
}
