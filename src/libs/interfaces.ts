export interface IPermission {
	[getter: string]: {
		all: string[];
		read: string[];
		write: string[];
		delete: string[];
	};
}
