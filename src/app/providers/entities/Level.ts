import { Exercice } from "./Exercice";

export class Level {

    levelId: number;
    name: string;
    description: string;
    nextLevelId: number;
    exercices: Exercice[] = [];
}
