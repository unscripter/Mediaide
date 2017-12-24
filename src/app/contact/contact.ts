import { Component } from '@angular/core';
import { contactUsData } from '../app.model';
import { ContactUsService } from './contact.service';
import { options } from '../app.model'

@Component({
  selector: 'contact-us',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  providers: [ContactUsService]
})

export class ContactUs {
  contactUs: contactUsData;
  private options = options;
  constructor(private ContactUsService: ContactUsService){
    this.contactUs = new contactUsData();
  }

  sendMessage(){
    this.ContactUsService.Message(this.contactUs);
    //call contact us API to send data with an email to their id
   
  }
} 
