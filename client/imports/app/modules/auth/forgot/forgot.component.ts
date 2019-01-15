import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

declare var Desktop: any;

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

    title = 'Forgot Password | ScrunTool';
    userEmail = '';
    signUpForm: FormGroup;
    sendingEmail = false;

    constructor(private snackBar: MatSnackBar,
                private _ngZone: NgZone) {
    }

    ngOnInit() {
        this.generateViewForm();
    }

    generateViewForm() {
        this.signUpForm = new FormGroup({
            'Email': new FormControl(null, [Validators.required, Validators.email])
        });
    }

    getErrorMessage() {
        return this.signUpForm.hasError('required') ? 'You must enter a value' :
            this.signUpForm.hasError('email') ? 'Not a valid email' : '';
    }


    onSubmit() {
        if (this.signUpForm.valid) {
            this.sendingEmail = true;
            Accounts.forgotPassword(
                {email: this.signUpForm.get('Email').value},
                () => {
                    this._ngZone.run(() => {
                        this.snackBar.open('Recovery email will be sent if any account is associated with this email address.', '', {});
                        this.sendingEmail = false;

                    });
                }
            );
        }
    }

}
