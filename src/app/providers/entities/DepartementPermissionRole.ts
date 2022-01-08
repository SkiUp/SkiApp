import { Departement } from "./Departement";
import { DepartementPermission } from "./DepartementPermission";
import { DepartementRole } from "./DepartementRole";

export class DepartementPermissionRole {

    permissionRoleId: number;
    departementId: number;
    permissionId: number;
    roleId: number;
    role: DepartementRole;
    departement: Departement;
    permission: DepartementPermission;
}