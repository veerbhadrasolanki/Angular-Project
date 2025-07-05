import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appTeamSizeValidator]',
  standalone: false,
  providers: [{provide: NG_VALIDATORS, useExisting: TeamSizeValidatorDirective, multi: true}]
   // To invoke this directive automatically when the user click on input box
})

export class TeamSizeValidatorDirective implements Validator{

  constructor() { }

  @Input("appTeamSizeValidator") n : number | any;

  validate(control: AbstractControl): ValidationErrors | null {
    let currentValue = control.value; // To get value from box
    let isValid = currentValue % this.n == 0;

    if(isValid){
      return null; //valid
    }else{
      return { divisible : { valid : false } }; //invalid

      // divisible : errors.?divisible // error message
    }
    //throw new Error('Method not implemented.');
  }



  //registerOnValidatorChange?(fn: () => void): void {
  //  throw new Error('Method not implemented.');
 // }

}
