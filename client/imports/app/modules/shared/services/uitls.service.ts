import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    validateAllFormFields(formGroup?: FormGroup): void {
        Object.keys(formGroup.controls)
            .forEach(field => {
                const control = formGroup.get(field);
                if (control instanceof FormControl) {
                    control.markAsDirty({onlySelf: true});
                } else if (control instanceof FormGroup) {
                    this.validateAllFormFields(control);
                }
            });
    }

}