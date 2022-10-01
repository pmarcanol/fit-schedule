import type { Exercise } from "./exercise";

export interface RoutineExercise {
    exercise: Exercise;
    step: number;
    series: Serie[];
}

export interface Serie {
    reps: number;
    restTime: number;
    kgs: number;
}

export interface Routine {
    exercises: RoutineExercise[];
}