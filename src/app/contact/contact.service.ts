import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { contactUsData } from '../app.model';
import { CommonAPIService } from '../app.api.service';
import { ServiceEndPoints } from '../common.service';

@Injectable()
export class ContactUsService {
    constructor(private _commonService: CommonService, private _apiService: CommonAPIService) {
    }
    Message(contactData: contactUsData) {
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(ServiceEndPoints.ContactUs, contactData)
            .subscribe(res => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(res._body, true);
            },
            err => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage("Internal server error", false);
            });
    }

}