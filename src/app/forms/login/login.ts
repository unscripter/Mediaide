import { Component } from '@angular/core';
import { LogInData } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TokenStruct } from '../../app.model'
import { UserLoginService } from './login.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { loginData } from './login.model';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    providers: [UserLoginService]
})

export class LoginForm implements OnInit {
    private logInData: loginData;
    private logInCondition: boolean;
    private tokenStruct: TokenStruct;
    logeedIn: boolean;

    constructor(private loginSvc: UserLoginService) {
        this.logInData = new LogInData();
        this.logInCondition = (this.logInData.username && this.logInData.password && this.logInData.keepLoggedIn);
        this.tokenStruct = new TokenStruct();

    }
    ngOnInit() {
        this.logeedIn = false;
    }
    logInUser() {
        this.loginSvc.logIn(this.logInData);
    }
    logInStatus() {
        return this.logeedIn;
    }

}
