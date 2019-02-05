import * as bcrypt from 'bcrypt';
import { UserRepository } from './../repositories/user/UserRepository';
const userRepo = new UserRepository();
const password = process.env.Password;
console.log(password);
export default () => {
  console.log('in seed');
  userRepo.countUser().then((res) => {
    if (res === 0) {
      bcrypt.hash(password, 10, (err, hash) => {
        console.log(hash);
        userRepo.userCreate({
          PASSWORD: hash,
          email: 'akash.dutt@successive.tech',
          name: 'Akash_Dutt',
          role: 'head-trainer',
        });

        userRepo.userCreate({
          PASSWORD: hash,
          email: 'trainee@successive.tech',
          name: 'Trainee',
          role: 'trainee',
        });
      });
    }
  });
};
export function deleteRecords(data) {
  userRepo.userDelete(data);
}
export function updateRecords() {
  userRepo.userUpdate({ _id: '1234' }, { name: 'NewUpdatedValues' });
}
