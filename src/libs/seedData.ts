import * as bcrypt from 'bcrypt';
import { UserRepository } from './../repositories/user/UserRepository';
const userRepo: UserRepository = new UserRepository();
const mongoPassword: string = process.env.Password;
export default async () => {
  try {
    const res = await userRepo.countUser();
    if (res === 0) {
      bcrypt.hash(mongoPassword, 10, (err, hash) => {
        userRepo.userCreate({
          email: 'akash.dutt@successive.tech',
          name: 'Akash_Dutt',
          role: 'head-trainer',
          userPassword: hash,
        });
        userRepo.userCreate({
          email: 'trainee@successive.tech',
          name: 'Trainee',
          role: 'trainee',
          userPassword: hash,
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
};
export function deleteRecords(data) {
  userRepo.userDelete(data);
}
export function updateRecords() {
  userRepo.userUpdate({ _id: '1234' }, { name: 'NewUpdatedValues' });
}
