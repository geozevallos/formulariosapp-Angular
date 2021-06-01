import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive(
    {

        // Tiene que tener un Cusommin y Ngmodel para entra la directiva
        selector: '[customMin] [ngModel]',
        providers: [{
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi: true
        }]
    }

)


export class CustomMinDirective implements Validator {

    @Input() minimo!: number;

    constructor() {
    }

    // el control es el input
    validate(control: FormControl){
        const inputValue = control.value;

    return (inputValue < this.minimo) ? {'customMin': true} : null;  
    }
}