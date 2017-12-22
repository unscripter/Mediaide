import { Component } from '@angular/core';
import { contactUsData } from '../app.model'

@Component({
  selector: 'contact-us',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})

export class ContactUs {
  contactUs: contactUsData;
  constructor(){
    this.contactUs = new contactUsData();
  }
  sendMessage(){
    //call contact us API to send data with an email to their id
    console.log("RRRRRRRRRR",this.contactUs);
  }

  // lat: number = 51.678418;
  // lng: number = 7.809007;

} 
