export const isAuthorized: boolean = false;
export const logInStatus: boolean = false;
export const appointmentReason = ['Dental Cleansing', 'Fluoride', 'X-ray'];

export class UserDetail {
    public name: string;
    public email: string;
    public password: string;
    public confirm_password: string;
    public phone: string;
    public dob: string;
    public country: string;
    public gender: string;
    public address: string;
    public agree: boolean;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirm_password = '';
        this.phone = '';
        this.dob = '';
        this.country = '';
        this.gender = '';
        this.address = '';
        this.agree = false;
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
};

export class QuotationData {
    public country: string;
    public treatment: any
    public patients: string;
    public facilities?: string[];

    constructor() {
        this.country = '';
        this.patients = '';
        this.treatment = '';
        this.facilities = [];
    }
}

export class Password {
    password: string
    confirm_password: string;
    constructor() {
        this.password = '';
        this.confirm_password = '';
    }
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
    timeOut: 1000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: false,
    lastOnBottom: true,
    preventDuplicates: true,
    // theClass: 'put any class which is applied to the extenal div
    ltl: true,
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




