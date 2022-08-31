import { AbstractControl, ValidatorFn } from "@angular/forms";

export class Formvalidators {
  static intergerBetween(nim: number, max: number): ValidatorFn {
    return (c: AbstractControl) => {
      if (!Number.isInteger(c.value)) {

        return {
          integer: {
            valid: false
          }
        }
      }
      else if ((c.value < nim) || (c.value > max)) {
        return {
          limit: {
            valid: false
          }
        }
      }
      // oui on renvoi null si tout vas bien
      return null;
    }

  };
}
