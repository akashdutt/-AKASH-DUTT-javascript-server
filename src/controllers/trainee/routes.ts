import { Router } from "express";
import { trainee } from "./index";
const traineeRouter = Router();
traineeRouter
	.get("/", trainee.get)
	.post("/", trainee.create)
	.put("/", trainee.update)
	.delete("/:id", trainee.delete);
export default traineeRouter;
