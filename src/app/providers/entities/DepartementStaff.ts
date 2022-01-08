import { Departement } from "./Departement";
import { DepartementRole } from "./DepartementRole";
import { User } from "./User";

export class DepartementStaff {

    userId: number;
    departementId: number;
    roleId: number;
    role: DepartementRole;
    departement: Departement;
    user: User;
}