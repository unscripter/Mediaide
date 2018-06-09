import { Component } from '@angular/core';
import { ForgotPasswordService } from './forgot.password.service';
import { forgotPasswordData } from '../../app.model'

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot.password.html',
    providers: [ForgotPasswordService]
})
export class ForgotPassword {
    forgotPassword = forgotPasswordData;
    constructor(private fgPassword: ForgotPasswordService) {
    }

    GetPassword(forgotPassword) {
        this.fgPassword.setForgotPasswordDetails(forgotPassword);
        this.forgotPassword = { 'email': '' }
    }
}