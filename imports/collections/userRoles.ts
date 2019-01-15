import { MongoObservable } from 'meteor-rxjs';
import { UserRoleModel } from "../models/userRoleModel";

export const UserRoles = new MongoObservable.Collection<UserRoleModel>('userRoles');
