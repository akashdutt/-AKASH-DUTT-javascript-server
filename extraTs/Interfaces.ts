import { GET_USERS, GET_PASSWORD } from "./constants";
export interface IPermission {
	GET_USERS: {
		all: string[];
		read: string[];
		write: string[];
		delete: string[];
	};
	GET_PASSWORD: {
		all: string[];
		read: string[];
		write: string[];
		delete: string[];
	};
}
import { users } from "./index";
export interface IUsers {
	traineeEmail: string;
	reviewerEmail: string;
}
