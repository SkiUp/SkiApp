import { DepartementPermissionRole } from "./DepartementPermissionRole";

export class DepartementPermission {
    permissionId: number;
    permissionName: string;
    permissionDescription: string;
    departementpermissionroles: DepartementPermissionRole[];
}
