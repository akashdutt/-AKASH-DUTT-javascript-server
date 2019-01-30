import { Router } from "express";
import { trainee } from "./index";
import validationHandler from "../../libs/routes/validationHandler";
import validation from "./validation";
import authMiddleWare from "../../libs/routes/authMiddleWare";
const traineeRouter = Router();
traineeRouter
	.get("/", authMiddleWare('TRAINEE','read'), trainee.get)
	.post("/", validationHandler(validation.create), trainee.create)
	.put("/", validationHandler(validation.update), trainee.update)
	.delete("/:id", validationHandler(validation.delete), trainee.delete);
export default traineeRouter;