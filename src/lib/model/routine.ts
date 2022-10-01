import type { Exercise } from "./exercise";

export interface RoutineExercise {
    exercise: Exercise;
    step: number;
}
export interface Routine {
    exercises: RoutineExercise[];
}