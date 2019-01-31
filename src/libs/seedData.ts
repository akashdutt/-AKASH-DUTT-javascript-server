import { UserRepository } from "./../repositories/user/UserRepository";
const userRepository = new UserRepository();

export default () => {
	console.log("in seed");
	userRepository.create({
		_id: "1234",
		name: "Akash_Dutt"
	});
};
export function deleteRecords() {

	userRepository.delete();
}
export function updateRecords(){
	userRepository.update();
}
