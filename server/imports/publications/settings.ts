import {Meteor} from 'meteor/meteor';
import {Settings} from "../../../imports/collections/settings";


Meteor.publish('SettingsList', function (data) {
    return Settings.find(data)
});
