import { Departement } from "./Departement";
import { Level } from "./Level";
import { Student } from "./Student";
import { User } from "./User";

export class Group {

    groupId: number;
    levelId: number;
    number: string;
    time: string;
    day: number;
    teacherId: number;
    nbStudents: number;
    departementId: number;
    departement: Departement;
    level: Level;
    teacher: User;
    studentgroups: Student[];

}