import { UserRepository } from './../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default () => {
  console.log('in seed');
  userRepository.countUser().then((res) => {
    if (res === 0) {
      userRepository.create({
        email: 'akash.dutt@successive.tech',
        name: 'Akash_Dutt',
        role: 'headTrainer',
      });
      userRepository.create({
        email: 'trainee@successive.tech',
        name: 'Trainee',
        role: 'trainee',
      });
    }
  });
};
export function deleteRecords() {

  userRepository.delete();
}
export function updateRecords() {
  userRepository.update({_id: '1234'}, {name: 'NewUpdatedValues'});
}
