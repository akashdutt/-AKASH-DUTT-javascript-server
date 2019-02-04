import { IPermission } from './interfaces';
const trainee: string = 'trainee';
const trainer: string = 'trainer';
const headTrainer: string = 'head-trainer';
export const permissions: IPermission = {
  TRAINEE: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
  getPasswords: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
};
