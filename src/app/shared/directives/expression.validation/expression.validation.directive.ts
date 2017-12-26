import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[patternService]'
})
export class ExpressionValidationDirective {
    private regex: RegExp;
    private current: string;
    regexDict = {
        'phonechk': /^\(?(([+,9,1]|[0]){0,3})\)?[- ]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
        'pincodechk': /(^\d{6}$)/,
        'integerchk': /^\d*$/,
        // 'emailchk': /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,        
        'citychk': /([a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$)/,
        'alphanumericchk': /^[a-zA-Z0-9\s,@!'/.{"}#-)~(]*$/,
        'numericchk': /^[a-zA-Z0-9\s]*$/,
        'passwordchk': /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/,
        'fullnamechk': /^[a-zA-Z\s\'\-,]*$/,
        'namechk': /^[a-zA-Z\s\'\-]*$/,
        'emailchk': /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    };

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.regex = null;
        this.current = null;
    }
    @Input('patternService') typeValidation : any;

    @HostListener('keyup', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        this.current = this.el.nativeElement.value;
        this.regex = this.regexDict[this.typeValidation];
        if (this.regex && this.regex.test(this.current)) {
            if (this.el.nativeElement.className.indexOf('invalid') >= 0) {
                this.renderer.removeClass(this.el.nativeElement, 'invalid');
            }
            this.renderer.addClass(this.el.nativeElement, 'valid');
        } else {
            if (this.el.nativeElement.className.indexOf('valid') >= 0) {
                this.renderer.removeClass(this.el.nativeElement, 'valid');
            }
            this.renderer.addClass(this.el.nativeElement, 'invalid');
        }
    }
}