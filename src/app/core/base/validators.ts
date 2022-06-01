import { ValidatorFn, Validators } from '@angular/forms';

export abstract class DPValidators {
  public static shortName(): ValidatorFn {
    return Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(12)]) as ValidatorFn
  }

  public static place(): ValidatorFn {
    return Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(160)]) as ValidatorFn
  }

  public static fullName(): ValidatorFn {
    return Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(80)]) as ValidatorFn
  }
}