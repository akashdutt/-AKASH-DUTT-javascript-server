import * as jwt from "jsonwebtoken";
import hasPermission from "./permissions";
export default function authMiddleWare(module, permissionType) {
	return function(req, res, next) {
		console.log(module, permissionType);
		const token = req.headers["authorization"];
		require("dotenv").config();
		const user = jwt.verify(token, process.env.KEY);
		if (!user) {
			next({ error: "Unauthorized Access", status: res.status(403) });
		} else {
			console.log(user);
		}
		if (!hasPermission(module, user.role, permissionType)) {
			next({
				error: "Permission Denied",
				message: `Access of ${permissionType} for ${user.role} do not exist`
			});
		}
		next();
	};
}
