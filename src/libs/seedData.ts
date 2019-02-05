import { UserRepository } from './../repositories/user/UserRepository';
const userRepo = new UserRepository();

export default () => {
  console.log('in seed');
  userRepo.countUser().then((res) => {
    if (res === 0) {
      userRepo.userCreate({
        email: 'akash.dutt@successive.tech',
        name: 'Akash_Dutt',
        role: 'head-trainer',
      });
      userRepo.userCreate({
        email: 'trainee@successive.tech',
        name: 'Trainee',
        role: 'trainee',
      });
    }
  });
};
export function deleteRecords() {

  userRepo.userDelete();
}
export function updateRecords() {
  userRepo.userUpdate({_id: '1234'}, {name: 'NewUpdatedValues'});
}
