import { Component } from '@angular/core';
import { debug } from 'util';

@Component({
    selector: 'profile',
    templateUrl: './profile.html',
})

export class UserProfile {
    checkupDoc: any;
    constructor() {
        this.checkupDoc = '';
    }
    checkUp(){
        debugger;
        console.log("EEEEEEEEEE", this.checkupDoc);
    }
}