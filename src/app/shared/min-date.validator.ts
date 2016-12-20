import { ValidatorFn, AbstractControl } from '@angular/forms';

export function minDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [ key: string ]: any } => {
    const gmt = new Date().getTimezoneOffset() * 60000;
    const date = new Date(Date.parse(control.value) + gmt);
    const dateNow = new Date(Date.now());
    const no = dateNow > date;
    return no ? { 'minDate': { dateNow } } : null;
  };
}
