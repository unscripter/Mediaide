import { Component } from '@angular/core';
import { LogInData } from '../app.model'
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginForm {
    private logInData: LogInData;
    constructor(){
        this.logInData = new LogInData();
    }
    signIn(){
        
    }
}