import {MongoObservable} from 'meteor-rxjs';
import {SettingModel} from "../models/settingModel";

export const Settings = new MongoObservable.Collection<SettingModel>('settings');
