import {Permissions} from "../../../imports/collections/permissions";
import {Subject} from "rxjs";


export const permissionsSeeder = function () {
    const subject = new Subject();
    Meteor.startup(async () => {

        if (Permissions.find({}).fetch().length === 0) {
            await Permissions.insert({
                name: 'Can Login',
                value: 'CAN_LOGIN',
                order: 1,
                status: 1
            }).toPromise();

            await Permissions.insert({
                name: 'Get Users',
                value: 'GET_USERS',
                order: 1,
                status: 1
            }).toPromise();

            await Permissions.insert({
                name: 'UPDATE Users',
                value: 'UPDATE_USERS',
                order: 1,
                status: 1
            }).toPromise();

            await Permissions.insert({
                name: 'UPDATE Settings',
                value: 'UPDATE_Settings',
                order: 1,
                status: 1
            }).toPromise();
        }
        subject.next();
        subject.complete();
    });

    return subject.asObservable();
}