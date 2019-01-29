import { IPermission } from "./interfaces";
const trainee: string = "trainee";
const trainer: string = "trainer";
const headTrainer: string = "head-trainer";
export const permissions: IPermission = {
	'TRAINEE': {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	},
	'getPasswords': {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	}
};
