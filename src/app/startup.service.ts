import { Injectable } from '@angular/core';

@Injectable()
export class StartupService {
    private apiUrl = 'http://192.168.1.8:8000/';
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
