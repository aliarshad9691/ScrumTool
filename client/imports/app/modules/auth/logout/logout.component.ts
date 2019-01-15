import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit, OnDestroy {

    title = 'User Logout | Employee Matrices Tracking';
    componentInView = false;
    loading = false;
    returnUrl;

    constructor(private titleService: Title,
                private  router: Router,
                private zone: NgZone) {
    }

    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.componentInView = true;
        Meteor.logout(() => {
            this.zone.run(() => {
                this.router.navigate(['/auth/login']);
            });
        })
    }

    ngOnDestroy() {
        this.componentInView = false;
    }
}
