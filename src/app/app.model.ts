export class UserDetail {
    public name: string;
    public email: string;
    public password: string;
    public dob: Date;
    public country: string;
    public gender: string;
    public address: string;
    public agree: boolean;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.dob = new Date();
        this.country = '';
        this.gender = '';
        this.address = '';
        this.agree = false;        
    }

    setUserDetail(obj: UserDetail) {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.dob = obj.dob;
        this.country = obj.name;
        this.gender = obj.gender;
        this.address = obj.address;
    }
};

export class LogInData {
    public username: string;
    public password: string;
    public keepLoggedIn: boolean;

    constructor(){
        {
            this.username = '';
            this.password = '';
            this.keepLoggedIn = false;
        }
    }
    
    setLoginDetails(obj: LogInData) {
        this.username = obj.username;
        this.password = obj.password;
        this.keepLoggedIn = obj.keepLoggedIn;
    }
};
export class TokenStruct {
    public detail: string;
    public key: string;
    public token: string;
    public value: string;
    public expires: any;
    public isRefresh: boolean;

    constructor() {
        this.key = 'access_token';
        this.value = '';
        this.isRefresh = false;
    }

    public isValueSet(): boolean {
        if (this.value === 'undefined' || !this.value) {
            return false;
        } else {
            return true;
        }
    }
};