import { Component } from '@angular/core';
import { Registration } from '../app.model'
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'registration',
    templateUrl: './registration.form.html',
    styleUrls: ['./registration.css']
})

export class RegistrationForm {
    userData: Registration;
    constructor(){
        this.userData = new Registration();        
    }

}