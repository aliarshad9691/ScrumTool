import {UserRoles} from "../../../imports/collections/userRoles";
import {Subject} from "rxjs";


export const usersSeeder = function () {
    const subject = new Subject();
    Meteor.startup(() => {
        const userRoles = UserRoles.find({}).fetch();

        if (Meteor.users.find({}).count() === 0 && userRoles.length > 0) {
            const permissions = userRoles[0].permissions.map(p => p.value);
            Accounts.createUser({
                username: 'ali',
                password: 'qwe',
                email: 'ali.arshad@vqode.com',
                profile: {
                    role: userRoles,
                    permissions: permissions,
                    name: 'Ali Arshad',
                    status: 1
                }
            });
        }
        subject.next();
        subject.complete();
    });
    return subject.asObservable();
}