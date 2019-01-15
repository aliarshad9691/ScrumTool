import {ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password-validator';
import {MatSnackBar} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {bind} from '../../../../../.meteor/local/build/programs/server/npm/node_modules/@angular/core/src/render3/instructions';

@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit, OnDestroy {

    registerForm: FormGroup;
    submitted: boolean = false;
    title = 'Recover Password';
    token = null;
    hidePassword = true;
    hideConfirmPassword = true;
    isPasswordReset = false;
    componentInView = new Subject();

    constructor(private titleService: Title,
                private route: ActivatedRoute,
                private router: Router,
                private cdr: ChangeDetectorRef,
                private formBuilder: FormBuilder,
                private snackBar: MatSnackBar,
                private _ngZone: NgZone) {
    }

    ngOnInit() {
        this.route.params
            .pipe(takeUntil(this.componentInView))
            .subscribe(
                (params: Params) => {
                    this.token = params.token;
                }
            );

        this.registerForm = this.formBuilder.group({
            Password: ['',Validators.compose([Validators.required,Validators.minLength(6)])],
            ConfirmPassword: ['',Validators.compose([Validators.required,Validators.minLength(6)])]
        }, {
            validator: ConfirmPasswordValidator.MatchPassword
        });

    }

    onSubmit() {
        this.submitted = true;
        if (this.token && this.registerForm.valid) {
            Accounts.resetPassword(this.token, this.registerForm.value.Password, (error) => {
                this.isPasswordReset = true;
                if (error && error.error===403){
                    this._ngZone.run(()=>{
                        this.snackBar.open('Token Expired.', '', {});
                        this.isPasswordReset = false;
                    });
                }
                else{
                    this.isPasswordReset = true;
                    this._ngZone.run(()=>{
                        this.snackBar.open('Password changed successfully.', '', {});
                        this.isPasswordReset = false;
                        this.router.navigate(["/auth/login"])
                    });
                }
            });
        }
    }
        spaceBar(event){
                    if(event.keyCode === 32)
                        return false;
    }
    ngOnDestroy() {
        this.componentInView.next();
        this.componentInView.complete();
    }

}
