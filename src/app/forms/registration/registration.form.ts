import { Component, OnInit} from '@angular/core';
import { UserDetail, options } from '../../app.model';
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

export class RegistrationForm implements OnInit {
    userData: UserDetail;
    disableCondition: any;
    options: any
    constructor(private apiService: UserRegisterService, private _commonService: CommonService ) {
        this.userData = new UserDetail();
        this.options = options;
    }
    ngOnInit() {
        this._commonService.scrollToTop();
        // this.apiService.fetch();
        // this.apiService.post();
    }
    signIn() {
        this.apiService.setRegistrationDetails(this.userData);    
    }
    
    
;
}