import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoutesModule } from "./modules/routes/routes.module";
import { SharedModule } from "./modules/shared/shared.module";
import { MainComponent } from "./layouts/main/main.component";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutesModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        MainComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {
}
