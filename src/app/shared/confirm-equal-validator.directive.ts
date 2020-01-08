import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from "@angular/core";


@Directive({
    selector: '[appConfirmValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})

export class ConfirmEqualValidatorDirective implements Validator {

    @Input()
    appConfirmValidator

    validate(c: AbstractControl): { [key: string]: any; } | null {
        const controlToCompare = c.parent.get(this.appConfirmValidator);
        if (controlToCompare && controlToCompare.value !== c.value) {
            return { 'notEqual': true };
        }
    }
} 