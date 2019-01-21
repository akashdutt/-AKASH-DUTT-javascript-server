import { IPermission } from "./Interfaces";
const trainee: string = "trainee";
const trainer: string = "trainer";
const headTrainer: string = "head-trainer";
export const permissions: IPermission = {
	getUsers: {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	},
	getPasswords: {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	}
};
