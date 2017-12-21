import { Component, OnInit} from '@angular/core';
import { UserDetail } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterService } from './register.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { CommonAPIService } from '../../app.api.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { error } from 'selenium-webdriver';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
    selector: 'registration',
    templateUrl: './registration.form.html',
    styleUrls: ['./registration.css'],
    providers: [UserRegisterService]
})

export class RegistrationForm implements OnInit{
    userData: UserDetail;
    constructor(private apiService: UserRegisterService,){
        this.userData = new UserDetail();   
    }
    ngOnInit(){
        this.apiService.getUserProfileDetails()
    }
    signIn(){
        debugger;
        this.apiService.getUserProfileDetails();
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}