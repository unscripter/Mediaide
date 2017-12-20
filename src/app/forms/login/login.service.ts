import { Injectable } from '@angular/core';
import { CommonService } from '../../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetail, TokenStruct } from '../../app.model';
import { loginData } from './login.model'

@Injectable()
export class UserLoginService {
    constructor(private _commSvc: CommonService) {
    }

    
}