import { Injectable, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contactUsData } from '../app.model';
import { CommonAPIService } from '../app.api.service';
import { ServiceEndPoints } from '../common.service';
import { window } from 'rxjs/operator/window';
import { Router } from '@angular/router'

@Injectable()
export class ContactUsService implements OnInit{
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService, private router: Router) {
    }

    ngOnInit(){
    }

    Message(contactData: contactUsData){
        return this._apiService.post(ServiceEndPoints.ContactUs, contactData)
        .subscribe( res => {
            this._commonService.notificationMessage(res._body, true); 
            console.log("RRRRRRRRRRRRRRR",res);           
        },
        err => {
          let error = this._apiService.handleError(err);
          this._commonService.notificationMessage('error', false);                      
        }); 
    }
    
}