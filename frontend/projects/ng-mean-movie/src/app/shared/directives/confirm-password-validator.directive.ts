import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordValidator]',
})
export class ConfirmPasswordValidatorDirective {
  static match(controlName: string, checkControlName: string | (string | number)[]): ValidatorFn {
    return (controls: AbstractControl | null) => {
      const control = controls!.get(controlName);
      const checkControl = controls!.get(checkControlName);

      if (checkControl!.errors && !checkControl!.errors.matching) {
        return null;
      }

      if (control!.value !== checkControl!.value) {
        controls?.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
