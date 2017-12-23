import { Component } from '@angular/core';
import { enquiryFormData, options, appointmentReason } from '../../app.model'
import { from } from 'rxjs/observable/from';
import { CommonAPIService } from '../../app.api.service';
import { ServiceEndPoints, CommonService } from '../../common.service'

@Component({
    selector: 'enquiry',
    templateUrl: './enquiry.html'
})
export class EnquiryForm {
    private enquiryData = enquiryFormData;
    private options = options;
    private appointmentReason = appointmentReason;
    constructor(private _apiService: CommonAPIService, private _commonService: CommonService){

    }

    makeEnquiry(enquireyData: any){
        return this._apiService.post(ServiceEndPoints.UserEnquiry, enquireyData)
        .subscribe( res => {
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
          let error = this._apiService.handleError(err);
          this._commonService.notificationMessage(err, false);                      
        }
    });
}
}