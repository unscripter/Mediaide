import { Component } from '@angular/core';
import { LoginForm } from '../../forms/login/login'

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})

export class Header {
    logInStatus: boolean;
    constructor(){
    // this.logInStatus = LoginForm.logInStatus();
    this.logInStatus = true;

    }
    
    changeLogInCondition(): boolean{ 
        if(this.logInStatus){
            this.logInStatus = false;
        }
        else{
            this.logInStatus = true;
        }
        return this.logInStatus;
    }
}