import { Component, OnInit} from '@angular/core';
import { UserDetail } from '../../app.model';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterService } from './register.service';
import { Observable } from 'rxjs/Observable';
import { CommonService, ServiceEndPoints } from '../../common.service';
import { CommonAPIService } from '../../app.api.service';

@Component({
    selector: 'registration',
    templateUrl: './registration.form.html',
    providers: [UserRegisterService]
})

export class RegistrationForm implements OnInit{
    userData: UserDetail;
    constructor(private apiService: UserRegisterService,){
        this.userData = new UserDetail();   
    }
    ngOnInit(){
    this.apiService.fetch();
    // this.apiService.post();
    }
    signIn(){
        // debugger;
        // this.apiService.post();
        this.apiService.setRegistrationDetails(this.userData);
    }
    
}