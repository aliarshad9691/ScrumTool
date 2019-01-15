import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {NewPasswordComponent} from './new-password/new-password.component';
import {LoginWrapperComponent} from './login-wrapper/login-wrapper.component';
import {AlreadyLoginGuard} from "../routes/already-login.guard";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login'
    },
    {
        path: 'login',
        canActivate: [AlreadyLoginGuard],
        component: LoginWrapperComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'forgot',
                component: ForgotComponent
            },
            {
                path: 'reset-password/:token',
                component: NewPasswordComponent
            }
        ]
    }, {
        path: 'logout',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
