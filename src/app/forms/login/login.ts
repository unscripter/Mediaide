import { Component } from '@angular/core';
import { LogInData } from '../../app.model'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginForm {
    private logInData: LogInData;
    private logInCondition: boolean;
   
    constructor(){
        this.logInData = new LogInData();
        this.logInCondition = (this.logInData.username && this.logInData.password && this.logInData.keepLoggedIn);
    }
    signIn(){
        this.logInData.setLoginDetails(this.logInData);
    }
}