import {UserRoles} from "../../../imports/collections/userRoles";
import {Permissions} from "../../../imports/collections/permissions";
import {Subject} from "rxjs";


export const rolesSeeder = function () {
    const subject = new Subject();
    Meteor.startup(async () => {
        const permissions = Permissions.find({}).fetch();
        if (UserRoles.find({}).fetch().length === 0 && permissions.length > 0) {

            await UserRoles.insert({
                name: 'Admin',
                permissions: permissions,
                order: 1,
                status: 1
            }).toPromise();
        }
        subject.next();
        subject.complete();
    });
    return subject.asObservable();
}