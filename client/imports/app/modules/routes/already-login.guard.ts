import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AlreadyLoginGuard implements CanActivate {
    constructor(private router: Router,
                public activatedRoute: ActivatedRoute) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if(Meteor.user()){
            this.router.navigate(['/']);
        } else {
            return true;
        }
    }
}
