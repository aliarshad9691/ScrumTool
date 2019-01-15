import { MongoObservable } from 'meteor-rxjs';
import { PermissionModel } from "../models/permissionModel";

export const Permissions = new MongoObservable.Collection<PermissionModel>('permissions');
