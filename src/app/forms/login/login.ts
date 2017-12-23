import { Component, OnInit } from '@angular/core';
import { LogInData } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TokenStruct } from '../../app.model';
import { UserLoginService } from './login.service';
import { options } from '../../app.model'

@Component({
    selector: 'login',
    templateUrl: './login.html',
    providers: [UserLoginService]
})

export class LoginForm implements OnInit {
    private logInData: LogInData;
    private logInResponse: any;
    private logInCondition: boolean;
    private tokenStruct: TokenStruct;
    logeedIn: boolean;
    public options = options;

    constructor(private loginService: UserLoginService) {
        this.logInData = new LogInData();
        this.tokenStruct = new TokenStruct();
        this.logInResponse = '';

    }
    ngOnInit() {
        if (this.logInData.keepLoggedIn)
            this.logeedIn = false;
    }

    logInUser() {
        this.logInResponse = this.loginService.logIn(this.logInData);
        this.logInData = new LogInData()

    }
}

