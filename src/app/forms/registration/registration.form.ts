import { Component } from '@angular/core';
import { UserDetail } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'registration',
    templateUrl: './registration.form.html',
    styleUrls: ['./registration.css']
})

export class RegistrationForm {
    userData: UserDetail;
    // filledObj: Registration;
    constructor(){
        this.userData = new UserDetail();   
    }
    
    signIn(){
        debugger;
        this.userData.setUserDetail(this.userData);
    }

}