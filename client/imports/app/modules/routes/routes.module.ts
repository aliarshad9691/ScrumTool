import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppGuard} from './app.guard';
import {PendingChangesGuard} from './pending.changes.guard';
import {AlreadyLoginGuard} from "./already-login.guard";
import {RoleGuard} from "./role.guard";
import {MainComponent} from "../../layouts/main/main.component";
import {ScrumModule} from "../scrum/scrum.module";
import AuthModule from "../auth/auth.module";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        loadChildren: () => {
            return ScrumModule;
        }
    },
    {
        path: 'auth',
        loadChildren: () => {
            return AuthModule;
        }
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    declarations: [],
    providers: [AppGuard, PendingChangesGuard, AlreadyLoginGuard, RoleGuard]
})
export class RoutesModule {
}
