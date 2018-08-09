import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
    constructor(private router: Router,
                public activatedRoute: ActivatedRoute) {
        // nothing in constructor
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if(Meteor.user()){
            return true;
        } else {
            this.router.navigate(['/auth/login']);
        }
    }
}
