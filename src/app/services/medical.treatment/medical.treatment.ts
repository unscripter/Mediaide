import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'medical-treatment',
    templateUrl: './medical.treatment.html',
    styleUrls: ['../services.css']
})

export class MedicalTreatment {
    @ViewChild('IVF') public IVF: ElementRef;
    @ViewChild('Cancer') public Cancer: ElementRef;
    @ViewChild('Cosmetic') public Cosmetic: ElementRef;
    @ViewChild('Cardiac') public Cardiac: ElementRef;
    @ViewChild('Dental') public Dental: ElementRef;

    public moveToIVF(): void {
        this.IVF.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToCancer(): void {
        this.Cancer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToCosmetic(): void {
        this.Cosmetic.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToCardiac(): void {
        this.Cardiac.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
    public moveToDental(): void {
        this.Dental.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
    }
}