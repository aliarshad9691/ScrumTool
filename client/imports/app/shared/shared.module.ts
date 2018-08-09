import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatTabsModule, MatToolbarModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule
    ],
    declarations: [],
    exports: [CommonModule, FormsModule, MatToolbarModule, MatTabsModule],
    providers: []
})
export class SharedModule {
}
