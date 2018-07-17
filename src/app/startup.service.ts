import { Injectable } from '@angular/core';

@Injectable()
export class StartupService {
    private apiUrl = 'mediaide.herokuapp.com/';
    constructor() { }

    getApiUrl() {
        return this.apiUrl;
    }
    // forceProductionAPIHook() {
    //     return false;   // For default pick
    //     // return true;  // For force Production test
    // }

    // if (this.forceProductionAPIHook()) {
    //     this.apiUrl = 'path to server';
    // }
}
