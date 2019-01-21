import { IPermission } from "./Interfaces";
export const GET_USERS: string = "getUsers";
export const GET_PASSWORD: string = "getPasswords";
const trainee: string = "trainee";
const trainer: string = "trainer";
const headTrainer: string = "head-trainer";
export const permissions: IPermission = {
	GET_USERS: {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	},
	GET_PASSWORD: {
		all: [headTrainer],
		read: [trainee, trainer],
		write: [trainer],
		delete: []
	}
};
