import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';

import {LoginComponent} from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {NewPasswordComponent} from './new-password/new-password.component';
import {LoginWrapperComponent} from './login-wrapper/login-wrapper.component';
import {LogoutComponent} from "./logout/logout.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        SharedModule,
    ],
    providers: [],
    declarations: [LoginComponent, ForgotComponent, NewPasswordComponent, LoginWrapperComponent, LogoutComponent]
})
export default class AuthModule {
}
