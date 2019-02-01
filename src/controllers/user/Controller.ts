import successHandler from "../../libs/routes/successHandler";
class UserController {
	get(req, res) {
		const data = {
			name: "Akash",
			id: "0011"
		};
		res.status(200).send(successHandler("recieved", data));
	}
	create(req, res) {
		const { name, id } = req.body;
		res.status(200).send(successHandler(name, id));
	}
	update(req, res) {
		const { name, id } = req.body;
		res.status(200).send(successHandler("successfully updated", id));
	}
	delete(req, res, next) {
		const { name, id } = req.body;
		const value = req.params.id;
		if (value != id) {
			next({ error: "not matched", id });
		}
		res.status(200).send(successHandler("deleted", null));
	}
}
export default new UserController()
