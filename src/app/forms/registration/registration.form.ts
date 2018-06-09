import { Component } from '@angular/core';
import { Registration } from '../../app.model'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'registration',
    templateUrl: './registration.form.html',
    styleUrls: ['./registration.css']
})

export class RegistrationForm {
    userData: Registration;
    // filledObj: Registration;
    constructor(){
        this.userData = new Registration();   
    }
    signIn(){
        debugger;
        this.userData.setRegistrationDetail(this.userData);
    }

}