import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UtilsService } from '../../shared/services/uitls.service';

declare var Desktop: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    title = 'User Login | ScrumTool';
    signUpForm: FormGroup;
    componentInView = false;
    loading = false;
    returnUrl;
    isLogingIn = false;
    error;
    hide = true;

    constructor(private titleService: Title,
                private router: Router,
                private route: ActivatedRoute,
                private zong: NgZone,
                private us: UtilsService,) {
    }

    ngOnInit() {
        this.componentInView = true;
        this.generateViewForm();
        this.titleService.setTitle(this.title);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
        if (Meteor.loggingIn()) {
            Accounts.onLogin(() => {
                this.zong.run(() => {
                    this.router.navigate(['/']);
                });
            });
        }
    }

    generateViewForm() {
        this.signUpForm = new FormGroup({
            'Email': new FormControl(null, [Validators.required, Validators.email]),
            'Password': new FormControl(null, Validators.required)
        });


    }

    getErrorMessage() {
        return this.signUpForm.hasError('required') ? 'You must enter a value' :
            this.signUpForm.hasError('email') ? 'Not a valid email' :
                '';
    }

    onSubmit() {
        if (!this.signUpForm.valid) {
            return this.us.validateAllFormFields(this.signUpForm);
        } else {
            this.isLogingIn = true;
            Meteor.loginWithPassword(this.signUpForm.get('Email').value, this.signUpForm.get('Password').value,
                this.afterLogin.bind(this)
            );
        }

    }

    afterLogin(data) {
        if (data && data.error === 'too-many-requests') {
            this.zong.run(() => {
                this.error = "Login Failed, Too many requests."
                this.isLogingIn = false;

            });

        } else if (data && data.error === 403) {
            this.zong.run(() => {
                this.error = "Login Failed, " + data.reason;
                this.isLogingIn = false;

            });


        } else if (!data) {
            this.zong.run(() => {
                this.router.navigate(['/']);
                this.isLogingIn = false;

            });

        }

    }

    ngOnDestroy() {
        this.componentInView = false;
    }
}
