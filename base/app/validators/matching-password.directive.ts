import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchingPasswordValidatorDirective, multi: true}]
})
export class MatchingPasswordValidatorDirective implements Validator {
  @Input() matchingPassword: string;
  @Input() matchedPassword: string;

  validate(control: AbstractControl): {[key: string]: any} {
    if (undefined === this.matchingPassword) {
      return this.validateMatchingPassword(control);
    }

    this.validateMatchedPassword(control);

    return null;
  }

  private validateMatchingPassword(control: AbstractControl): {[key: string]: any} {
      const matchedPasswordElement = control.root.get(this.matchedPassword);
      if (control.value !== matchedPasswordElement.value) {
          return { matchPassword: false };
      }

      return null;
  }

  private validateMatchedPassword(control: AbstractControl) {
      const matchingPasswordElement = control.root.get(this.matchingPassword);
      if (!matchingPasswordElement) {
          return;
      }

      if (control.value !== matchingPasswordElement.value) {
          matchingPasswordElement.setErrors({ matchPassword: false });
      } else {
          delete matchingPasswordElement.errors['matchPassword'];
      }

      if (!Object.keys(matchingPasswordElement.errors).length) {
          matchingPasswordElement.setErrors(null);
      }
  }
}
