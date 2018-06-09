import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'featured-services',
    templateUrl: './featured.services.html',
    styleUrls: ['../services.css']
})

export class FeaturedServices {
    @ViewChild('DOCTOR') public DOCTOR: ElementRef;
    @ViewChild('QUOTE') public QUOTE: ElementRef;
    @ViewChild('APPOINTMENTS') public APPOINTMENTS: ElementRef;
    @ViewChild('TALK') public TALK: ElementRef;
    @ViewChild('INDIA') public INDIA: ElementRef;
    @ViewChild('TRAVEL') public TRAVEL: ElementRef;
    @ViewChild('HOTEL') public HOTEL: ElementRef;
    @ViewChild('AIRPORT') public AIRPORT: ElementRef;
    @ViewChild('FAMILY') public FAMILY: ElementRef;
    @ViewChild('SIGHTSEEING') public SIGHTSEEING: ElementRef;

    public moveToDoctor(): void {
        this.DOCTOR.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToQuote(): void {
        this.QUOTE.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToAppointments(): void {
        this.APPOINTMENTS.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToTalk(): void {
        this.TALK.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToIndia(): void {
        this.INDIA.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveTotravel(): void {
        this.TRAVEL.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToHotel(): void {
        this.HOTEL.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToAirport(): void {
        this.AIRPORT.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToFamily(): void {
        this.FAMILY.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToSightseeing(): void {
        this.SIGHTSEEING.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }



}