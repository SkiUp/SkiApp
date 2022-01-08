import { DepartementPermissionRole } from "./DepartementPermissionRole";
import { DepartementStaff } from "./DepartementStaff";

export class DepartementRole {

    roleId: number;
    roleName: string;
    departementpermissionroles: DepartementPermissionRole[];
    departementstaffs: DepartementStaff[];
}