import { Router } from "express";
import userObj from './index'
import validationHandler from "../../libs/routes/validationHandler";
import validation from "../trainee/validation";
const UserRouter = Router();
UserRouter.get('/',userObj.get)
.post("/", validationHandler(validation.create), userObj.create)
	.put("/", validationHandler(validation.update), userObj.update)
	.delete("/:id", validationHandler(validation.delete), userObj.delete);
export default UserRouter;
