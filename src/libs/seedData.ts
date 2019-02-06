import * as bcrypt from 'bcrypt';
import { UserRepository } from './../repositories/user/UserRepository';
const userRepo = new UserRepository();
const mongoPassword = process.env.Password;
console.log(mongoPassword);
export default async () => {
  try {
    console.log('in seed');
    const res = await userRepo.countUser();
    if (res === 0) {
      bcrypt.hash(mongoPassword, 10, (err, hash) => {
        console.log(hash);
        userRepo.userCreate({
          email: 'akash.dutt@successive.tech',
          name: 'Akash_Dutt',
          password: hash,
          role: 'head-trainer',
        });
        userRepo.userCreate({
          email: 'trainee@successive.tech',
          name: 'Trainee',
          password: hash,
          role: 'trainee',
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
