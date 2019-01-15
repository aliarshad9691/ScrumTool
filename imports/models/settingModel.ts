export interface SettingModel {
    _id?: string;
    key: string;
    value: string;
    date: Date;
    user: Meteor.User;
    status: number;
}
