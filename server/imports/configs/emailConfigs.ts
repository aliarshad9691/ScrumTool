import {Settings} from "../../../imports/collections/settings";
import {Subject} from "rxjs";

export const emailConfigs = function () {
    const subject = new Subject();
    Meteor.startup(() => {
        if (Settings.find().fetch().length > 0) {
            Accounts.emailTemplates.resetPassword.text = (user, url) => {
                let token = url.substring(url.lastIndexOf('/') + 1, url.length);
                let newUrl = Meteor.absoluteUrl('auth/reset-password/' + token);

                let emailTemplate = Settings.find({key: 'forgotEmailTemplate'}).fetch();

                let str = emailTemplate.length > 0 ? emailTemplate[0].value : 'Link: ';
                str += newUrl;
                return str;
            }

            Accounts.emailTemplates.resetPassword.from = () => {
                let emailFrom = Settings.find({key: 'forgotEmailFrom'}).fetch();
                let str = emailFrom.length > 0 ? emailFrom[0].value : 'From: ';
                return str;
            }

            Accounts.emailTemplates.resetPassword.subject = () => {
                let emailSubject = Settings.find({key: 'forgotEmailSubject'}).fetch();
                let str = emailSubject.length > 0 ? emailSubject[0].value : 'Subject: ';
                return str;
            }
        }
        subject.next();
        subject.complete();
    });

    return subject.asObservable();
}