const trainee = 'trainee'
const trainer = 'trainer'
const headTrainer = 'head-trainer'
export const permissions = {
	'getUsers': {
			all: [headTrainer],
			read: [trainee, trainer],
			write: [trainer],
			delete: [],
	}
	,'getPasswords': {
			all: [headTrainer],
			read: [trainee, trainer],
			write: [trainer],
			delete: [],
	}
}
