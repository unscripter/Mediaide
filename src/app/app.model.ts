export const isAuthorized: boolean = false;
export const logInStatus: boolean = false;

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
    clickToClose: true,
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

export class editUserData {
    name: string;
    email: string;
    phone: any;
    address: any;
    dob: any;
    country: string;
    gender: any;
    service: string;
    doctorName: string;
    hospitalName: string;
    treatment: string;
    message: string;

    constructor(){
        this.name = '',
        this.email = '',
        this.phone = '',
        this.address = '',
        this.dob = '',
        this.country = '',
        this.gender = '',
        this.service = '',
        this.doctorName = '';
        this.hospitalName = '',
        this.treatment = '',
        this.message = ''
    }   
}

export const countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

export const treatmentType = [];





