import { Component } from '@angular/core';
import { UserDetail} from '../../app.model';
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

export class RegistrationForm{
    userData: UserDetail;
    disableCondition: any;
    options: any
    constructor(private apiService: UserRegisterService, private _commonService: CommonService ) {
        this.userData = new UserDetail();
    }
 
    signIn() {
        this.apiService.setRegistrationDetails(this.userData);    
    }
    
    
;
}