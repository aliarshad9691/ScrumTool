import {Settings} from "../../../imports/collections/settings";
import {Subject} from "rxjs";


export const settingsSeeder = function () {
    const subject = new Subject();
    Meteor.startup(async () => {
        const user = Meteor.users.find().fetch();
        const emptyEmailTemplate = Settings.find({key: 'forgotEmailTemplate'}).fetch();
        const emptyEmailFrom = Settings.find({key: 'forgotEmailFrom'}).fetch();
        const emptyEmailSubject = Settings.find({key: 'forgotEmailSubject'}).fetch();

        if (user.length > 0) {
            if (emptyEmailTemplate.length === 0) {
                await Settings.insert({
                    key: 'forgotEmailTemplate',
                    value: 'Hello,\n To reset your password, please click follow link...\n',
                    user: user[0],
                    date: new Date(),
                    status: 1
                }).toPromise();
            }


            if (emptyEmailFrom.length === 0) {
                await Settings.insert({
                    key: 'forgotEmailFrom',
                    value: 'ScrumTool <no-reply@mail.vqode.com>',
                    user: user[0],
                    date: new Date(),
                    status: 1
                }).toPromise();
            }

            if (emptyEmailSubject.length === 0) {
                await Settings.insert({
                    key: 'forgotEmailSubject',
                    value: 'Reset your ScrumTool password',
                    user: user[0],
                    date: new Date(),
                    status: 1
                }).toPromise();
            }
        }
        subject.next();
        subject.complete();
    });
    return subject.asObservable();
}