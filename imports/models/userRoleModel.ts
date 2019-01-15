import { PermissionModel } from "./permissionModel";

export interface UserRoleModel {
    _id?: string;
    name: string;
    description?: string;
    permissions: PermissionModel[];
    order: number;
    status: number;
}
