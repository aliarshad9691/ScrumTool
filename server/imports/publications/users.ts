import {Meteor} from 'meteor/meteor';

Meteor.publish('usersList', function () {
    if (Meteor.user() && Meteor.user().profile.permissions.indexOf('GET_USERS') > -1) {
        return Meteor.users.find();
    } else {
        const fields = {
            username: 1,
            'profile.name': 1
        };
        return Meteor.users.find({'profile.status': 1}, {fields});
    }
});
