import { Injectable } from '@angular/core';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { CommonAPIService } from '../../app.api.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail, TokenStruct } from '../../app.model';


@Injectable()
export class UserRegisterService {
  userData: UserDetail;
  constructor(private _commanService: CommonService, private http: Http, private _apiService: CommonAPIService) {
  }

  // getUserProfileDetails(data: any): Observable<any> {
  //   const url = this._commSvc.getApiUrl() + ServiceEndPoints.userRegister;
  //   const response$ = this._apiSvc.post(url, data).subscribe(r => {console.log("RES",r)},
  //   e => { console.log("ERR",e)});
  //   return ;
  // };
  fetch() {
    return this._apiService.get(ServiceEndPoints.GetUser)
      .subscribe(r => {
        debugger;
        console.log("RES", r);
        this.userData = r;
      },
      e => {
        console.log('ERR', e);
      });
  }

  post() {
    return this._apiService.post(ServiceEndPoints.RegisterUser, this.userData)
      .subscribe(res => {
        debugger;
        console.log("RES", res)
      },
      err => {
        console.log('ERR', err);
        this._apiService.handleError(err)
      });
  }
  
  setRegistrationDetails(userData: UserDetail){
    return this._apiService.post(ServiceEndPoints.RegisterUser, userData)
    .subscribe(res => {
      // debugger;
      console.log("RES", res)
    },
    err => {
      console.log('ERR', err);
      this._apiService.handleError(err)
    });
  }
  // private handleError(error: Response) {
  //   console.log(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }


  // getUserProfileDetails(){
  //   this.http
  //   .get('https://api.github.com/gists/public')
  //   .map((res: Response) => res.json())
  //   .toPromise()
  //   .then((data: any) =>console.log("EEEEEEEEEEEE",data))
  //   .catch((err: any) => {
  //       this.handleError(err);
  //       Promise.resolve();
  //   });
  // }

  //working

}
