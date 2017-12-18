// import { PassThrough } from "stream";

export class Registration{
    private name: string;
    private email: string;
    private password: string;
    private dob: Date;
    private country: string;
    private gender: string;
    private address: string;
    private agree: boolean;

    constructor(name, email, password, dob, country, gender, address, agree){
        this.name = name ? name : null;
        this.email = email ? email : null;
        this.password = password ? password : null;
        this.dob = dob ? dob : null;
        this.country = country ? country : null;
        this.gender = gender ? gender : null;
        this.gender = gender ? gender : null;
        this.gender = gender ? gender : null;        
    }
}

export class LogInData {
    private username: string;
    private password: string;
    private keepLoggedIn: boolean;

    constructor(username, password, keepLoggedIn){
        if(username && password){
            this.username = username;
            this.password = password;
            this.keepLoggedIn = keepLoggedIn;
        }

    }
}