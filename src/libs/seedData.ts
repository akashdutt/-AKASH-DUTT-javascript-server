import { UserRepository } from './../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default () => {
  console.log('in seed');
  userRepository.countUser().then((res) => {
    if (res === 0) {
      userRepository.create({
        name: 'Akash_Dutt',
        role: 'headTrainer',
        email: 'akash.dutt@successive.tech',
      });
      userRepository.create({
        name: 'Trainee',
        role: 'trainee',
        email: 'trainee@successive.tech',
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
