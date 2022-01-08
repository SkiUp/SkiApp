import { DepartementStaff } from "./DepartementStaff";
import { Group } from "./Group";

export class User {
    userId: number;
    firstName: string;
    lastName: string;
    password: string;
    departementstaffs: DepartementStaff[];
    groups: Group[];
    logins: any[];
}