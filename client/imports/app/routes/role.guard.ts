import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private router: Router,
                public activatedRoute: ActivatedRoute) {
        // nothing in constructor
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if(Meteor.user()){
            const roles = next.data["roles"];
            if(roles.indexOf(Meteor.user().profile.role) > -1 ){
                return true;
            } else {
                this.router.navigate(['/scores']);
            }
        } else {
            this.router.navigate(['/auth/login']);
        }
    }
}
