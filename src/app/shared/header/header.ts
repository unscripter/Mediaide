import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../forms/login/login'
import { UserLoginService } from '../../forms/login/login.service'
import { CommonService } from '../../common.service';
import { Router } from '@angular/router'
import { locale } from 'moment';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.css'],
    providers: [UserLoginService]
})

export class Header implements OnInit {
    token: any;
    isAuthorized: any;
    constructor(private _commanService: CommonService, private router: Router, private _usrLogin: UserLoginService) {
        
        this.isAuthorized = false;
    }

    ngOnInit() {
        this.token = this._commanService.getCookie('access_token');
        const auth = this._commanService.getCookie('isAuthorized');
        if (this.token && auth) {
            this.isAuthorized = this._commanService.getCookie('isAuthorized');
        }
    }

    logOut() {
        sessionStorage.clear();
        // this.clearUserData('userProfileData');
        sessionStorage.setItem('userProfileData', '');
        this._commanService.deleteCookie();
        this._commanService.setCookie('isAuthorized', true);
        this.isAuthorized = this._commanService.getCookie('isAuthorized');
        this.router.navigate(['/home']);
        this._commanService.notificationMessage("logged out successfully", true);
        this.isAuthorized = this._commanService.changeisAuthorizedCondition(false);
        if(this._commanService.getCookie('token')){
        location.reload()
        }

    }
}
