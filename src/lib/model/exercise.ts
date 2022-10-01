export interface Exercise {
	name: string;
	force: string;
	level: string;
	mechanic: string;
	equipment: string;
	primaryMuscles: Array<string>;
	secondaryMuscles:  Array<string>;
	instructions: Array<string>;
	category: string;
	id: number;
}
