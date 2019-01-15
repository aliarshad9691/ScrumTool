import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatNativeDateModule,
    MatSidenavModule, MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {NavComponent} from "./nav/nav.component";
import {LayoutModule} from "@angular/cdk/layout";
import {UtilsService} from "./services/uitls.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    declarations: [NavComponent],
    exports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        NavComponent,
        LayoutModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    providers: [MatDatepickerModule, UtilsService]
})
export class SharedModule {
}
