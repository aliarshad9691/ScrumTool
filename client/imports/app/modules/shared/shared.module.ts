import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import { NavComponent } from "./nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule
    ],
    declarations: [NavComponent],
    exports: [CommonModule, FormsModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatListModule, MatIconModule, NavComponent, LayoutModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
    providers: [MatDatepickerModule]
})
export class SharedModule {
}
