import { Component } from '@angular/core';
import { enquiryFormData, appointmentReason } from '../../app.model'
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints, CommonService } from '../../common.service'

@Component({
    selector: 'enquiry',
    templateUrl: './enquiry.html'
})
export class EnquiryForm {
    enquiryData = enquiryFormData;
    appointmentReason = appointmentReason;
    constructor(private _apiService: CommonAPIService, private _commonService: CommonService) {
    }

    makeEnquiry(enquireyData: any) {
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(ServiceEndPoints.UserEnquiry, enquireyData)
            .subscribe(res => {
                this._commonService.stopBlockUI();
                this._commonService.notificationMessage(res._body, true);
                this.enquiryData = {
                    name: '',
                    email: '',
                    mobile: '',
                    dob: '',
                    appointmentData: '',
                    gender: '',
                    reason: '',
                    message: '',
                },
                    err => {
                        this._commonService.stopBlockUI();
                        this._commonService.notificationMessage("Internal server error, try again", false);
                    }
            });
    }
}