import './imports/methods/users';
import './imports/publications/users'
import {permissionsSeeder} from "./imports/seeders/permissionsSeeder";
import {rolesSeeder} from "./imports/seeders/rolesSeeder";
import {usersSeeder} from "./imports/seeders/usersSeeder";
import {settingsSeeder} from "./imports/seeders/settingsSeeder";
import {emailConfigs} from "./imports/configs/emailConfigs";
import {loginConfigs} from "./imports/configs/loginConfigs";


async function seedDbnSettings() {
    await permissionsSeeder().toPromise();
    await rolesSeeder().toPromise();
    await usersSeeder().toPromise();
    await settingsSeeder().toPromise();
    await emailConfigs().toPromise();
    loginConfigs();
}

seedDbnSettings();


Meteor.startup(() => {

});