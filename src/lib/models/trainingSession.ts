import type { Routine } from "./routine";

export interface TrainingSession{
    timestamp: number;
    routines: Routine[]
}