export const loginConfigs = function () {
    Meteor.startup(() => {
        Accounts.validateLoginAttempt(data => {
            return data.user && data.user.profile && data.user.profile.permissions.indexOf('CAN_LOGIN') >= 0;
        });
    });
}