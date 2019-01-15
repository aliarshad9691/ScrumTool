import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    isMobile: Observable<BreakpointState>;

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit() {
        this.isMobile = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
            map(result => result.matches)
        );
    }

}
