import { Component } from '@angular/core';
import { LogInData, options } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginService } from './login.service';
import { CommonService } from '../../common.service';
import { Header } from '../../shared/header/header';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    providers: [UserLoginService]
})

export class LoginForm {
    logInData: LogInData;
    constructor(private loginService: UserLoginService, private _commonService: CommonService) {
        this.logInData = new LogInData();
    }

    logInUser() {
        this.loginService.logIn(this.logInData);
        this.logInData = new LogInData();
    }
}

