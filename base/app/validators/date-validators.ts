
export function invalidDateValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const ctrlDay = <FormControl>control.root.get('day');
    const ctrlMonth = <FormControl>control.root.get('month');
    const ctrlYear = <FormControl>control.root.get('year');

    if(ctrlDay && ctrlMonth && ctrlYear){
        console.log(ctrlDay.value, ctrlMonth.value, ctrlYear.value);

        //if(ctrlYear.value === 2019){
            return { 'dateIsVaild': true };
        //} else {
        //   return { 'dateIsVaild': true };
        //}
    }
}

import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

export class DateValidators {

    static invalidDateValidator(control: FormControl) {
        return (c: FormControl) => {
            const ctrlDay = control.get('day');
            const ctrlMonth = control.get('month');
            const ctrlYear = control.get('year');

            if (new Date(ctrlYear.value, ctrlMonth.value, ctrlDay.value)) {
                return {
                    invalidDate: {
                        valid: false
                    }
                }
            } else {
                return {
                    invalidDate: {
                        valid: true
                    }
                }
            }
        }
    }

    /* static invalidDateValidator(control: AbstractControl): { [key: string]: any } {
         const matchedPassword = control.get('matchedPassword')
         if (control.value !== matchedPassword.value) {
             return { invalidDate: false };
         }
 
         if (control.value !== matchingPasswordElement.value) {
             matchingPasswordElement.setErrors({ matchPassword: false });
         } else {
             delete matchingPasswordElement.errors['matchPassword'];
         }
     
         if (!Object.keys(matchingPasswordElement.errors).length) {
             matchingPasswordElement.setErrors(null);
         }
         return null;
     }*/

}
