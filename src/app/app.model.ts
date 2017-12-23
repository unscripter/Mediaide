import { strictEqual } from "assert";

export class UserDetail {
    public name: string;
    public email: string;
    public password: string;
    public confirm_password: string;
    public phone: number;
    public dob: Date;
    public country: string;
    public gender: string;
    public address: string;
    public agree: boolean;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirm_password = '';
        this.phone = null;
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
    public email: string;
    public password: string;
    public keepLoggedIn: boolean;

    constructor() {
        {
            this.email = '';
            this.password = '';
            this.keepLoggedIn = false;
        }
    }

    setLoginDetails(obj: LogInData) {
        this.email = obj.email;
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
class OtherCost {
    public airline?: boolean;
    public food?: boolean;
    public visa?: boolean;
    public hotel?: boolean;
    public other?: boolean;

    constructor() {
        this.airline = false;
        this.food = false;
        this.visa = false;
        this.hotel = false;
        this.other = false;
    }
}

export class QuotationData {
    public country: string;
    public treatmentType: any;
    public patientNumber: string;
    public other?: OtherCost;

    constructor() {
        this.country = '';
        this.treatmentType = '';
        this.patientNumber = '';
        this.other = new OtherCost();
    }
}

export const dataList = {
    'countryList': [
        'India', 'Australia', 'Paris', 'London', 'UK'
    ],
    'treatementList': [
        'one', 'Two', 'Three', 'Four', 'Five'
    ],
    'noOfPateints': [
        '1', '2', '3', '4'
    ]
};

export class Password {
    password: string
    confirmPassword: string;
}

export class contactUsData {
    name: string;
    email: string;
    phone: string;
    message: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
    }
}

export const forgotPasswordData = {
    email: ''
}

export const options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    lastOnBottom: true,    
} 

export const enquiryFormData = {
    name: '',
    email: '',
    mobile: '',
    dob: '',
    appointmentData: '',
    gender: '',
    reason: '',
    message: ''
}

export const appointmentReason = ['Dental Cleansing','Fluoride','X-ray'];
   
export const isAuthorized: boolean = true;
