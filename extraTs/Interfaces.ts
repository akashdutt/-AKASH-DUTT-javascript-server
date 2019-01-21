export interface IPermission {
	[getter: string]: {
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
