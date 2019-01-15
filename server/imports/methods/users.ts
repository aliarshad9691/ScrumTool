import {Meteor} from 'meteor/meteor';


function dummyFunction() {

}

Meteor.methods({
    addUser(user: any) {
        if (!Meteor.user() || (Meteor.user()._id !== user._id && Meteor.user().profile.permissions.indexOf('UPDATE_USERS') === -1)) {
            throw new Meteor.Error('Not Allowed', 'You do not have access to update this user.');
        }
        if (user._id) {
            if (user.password) {
                Accounts.setPassword(user._id, user.password);
            }
            if (user.username) {
                Accounts.setUsername(user._id, user.username);
            }

            if (user.email) {
                Accounts.addEmail(user._id, user.email);
                if (Meteor.users.findOne(user._id).emails.length > 1) {
                    const oldEmail = Meteor.users.findOne(user._id).emails[0].address;
                    Accounts.removeEmail(user._id, oldEmail);
                }
            }

            if (user.profile) {
                Meteor.users.update(user._id, {
                    $set: {
                        profile: user.profile
                    }
                });
            }

        } else {
            Accounts.createUser(user);
        }

    },

    removeUser(_id: string, callback) {
        if (!Meteor.user() || (Meteor.user().profile.permissions.indexOf('UPDATE_USERS') === -1)) {
            throw new Meteor.Error('Not Allowed', 'You do not have access to delete this user.');
        }
        Meteor.users.remove(_id, callback || dummyFunction);
        return _id;
    }


});
