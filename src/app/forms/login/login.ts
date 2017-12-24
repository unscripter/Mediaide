import { Component, OnInit } from '@angular/core';
import { LogInData, options } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TokenStruct } from '../../app.model';
import { UserLoginService } from './login.service';
import { Router } from '@angular/router'
import { CommonService } from '../../common.service'
import { from } from 'rxjs/observable/from';
import { Header } from '../../shared/header/header';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    providers: [UserLoginService]
})

export class LoginForm implements OnInit {
    private logInData: LogInData;
    private logInCondition: boolean;
    private tokenStruct: TokenStruct;
    logeedIn: boolean;
    public options = options;

    constructor(private loginService: UserLoginService, private router: Router, private _commonService: CommonService) {
        this.logInData = new LogInData();
        this.tokenStruct = new TokenStruct();

    }
    ngOnInit() {
        this._commonService.scrollToTop();
    }

    logInUser() {
        this.loginService.logIn(this.logInData);
        this.logInData = new LogInData();
    }
}

