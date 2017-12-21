export class loginData  {
    public username: string;
    public password: string;
    public keepLoggedIn: boolean;

    constructor(){
        this.username = '';
        this.password = '';
        this.keepLoggedIn = false;

    }

}