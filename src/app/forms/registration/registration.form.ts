import { Component } from '@angular/core';
import { UserDetail, countryList } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterService } from './register.service';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { CommonAPIService } from '../../app.api.service';

@Component({
    selector: 'registration',
    templateUrl: './registration.form.html',
    providers: [UserRegisterService]
})

export class RegistrationForm {
    userData: UserDetail;
    disableCondition: any;
    countryList: string[];
    constructor(private apiService: UserRegisterService, private _commonService: CommonService) {
        this.userData = new UserDetail();
        this.setPackageDetails();
    }

    setPackageDetails(){
        let data = this._commonService.getFromSessionStorage('package-data');
        let packageDetails = JSON.parse(data);
        this.countryList = packageDetails['country'];
    }

    signIn() {
        let success = this.apiService.setRegistrationDetails(this.userData);
        if(success){
        this.userData = new UserDetail();        
    }
}
}