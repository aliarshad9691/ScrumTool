import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {

    static MatchPassword(control: AbstractControl) {
        let Password = control.get('Password').value;
        let ConfirmPassword = control.get('ConfirmPassword').value;

        if (Password != ConfirmPassword) {
            control.get('ConfirmPassword').setErrors({ConfirmPassword: true});
        } else {
            control.get('ConfirmPassword').setErrors(null);
        }
    }
}

