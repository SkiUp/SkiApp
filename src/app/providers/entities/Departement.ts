import { DepartementPermissionRole } from "./DepartementPermissionRole";
import { DepartementStaff } from "./DepartementStaff";
import { Group } from "./Group";
import { Level } from "./Level";

export class Departement {

    departementId: number;
    departementName: string;
    limiteEtudiantsGroupe: number;
    levels: Level[];
    departementpermissionroles: DepartementPermissionRole[];
    departementstaffs: DepartementStaff[];
    groups: Group[];
}