import { Group } from "./Group";

export class Employe {

    userId: number;
    firstName: string;
    lastName: string;
    password: string;
    departementstaffs: any[];
    groups: Group[];
}