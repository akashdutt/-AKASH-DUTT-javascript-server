import successHandler from "../../libs/routes/successHandler";

class UserController {
	get(req, res) {
		const data = {
			name: "Akash",
			id: "0011"
		};
		res.status(200).send(successHandler("recieved", data));
	}
}
export default new UserController()
