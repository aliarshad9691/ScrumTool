import './imports/polyfills';
import {Meteor} from 'meteor/meteor';
import 'zone.js';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './imports/app/app.module';

import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";


Meteor.startup(() => {

    if (Meteor.isProduction) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);

});