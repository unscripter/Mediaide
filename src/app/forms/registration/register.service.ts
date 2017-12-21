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
  constructor(private _commSvc: CommonService, private http: Http, private _apiSvc: CommonAPIService) {
  }

  // getUserProfileDetails(data: any): Observable<any> {
  //   const url = this._commSvc.getApiUrl() + ServiceEndPoints.userRegister;
  //   const response$ = this._apiSvc.post(url, data).subscribe(r => {console.log("RES",r)},
  //   e => { console.log("ERR",e)});
  //   return ;
  // };

  getUserProfileDetails(){
    this.http
    .get('https://api.github.com/gists/public')
    .map((res: Response) => res.json())
    .toPromise()
    .then((data: any) =>console.log("EEEEEEEEEEEE",data))
    .catch((err: any) => {
        this.handleError(err);
        // this.blockUI.stop();
        // window.location.href = this.signInUrl;
        Promise.resolve();
    });
  }
  // private handleError(error: any) {
  //   const errorMsg = error.message || `There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  //   return Observable.throw(errorMsg);
  // }
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
}

}
// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { UserDetail } from '../../app.model';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// const API_URL = 'http://google.com';

// @Injectable()
// export class ApiService {

//   constructor(
//     private http: Http
//   ) {
//   }

//   public getAllTodos():Observable<any>{
//       debugger;
//     console.log("==================", this.http.get(`http://192.168.1.8:8000/api/get-user`).map((response:Response) => {
//         console.log(response.json());
//         response.json();
//     }).subscribe());
//       return;
//   }

//   private handleError (error: Response | any) {
//     console.error('ApiService::handleError', error);
//     return Observable.throw(error);
//   }
// }