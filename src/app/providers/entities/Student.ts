import { Group } from "./Group";

export class Student {

    studentId: number;
    lastName: string;
    firstName: string;
    phone: number;
    groupId: number;
    status: number;
    special: string | null;
    student: Student;
    group: Group;

}