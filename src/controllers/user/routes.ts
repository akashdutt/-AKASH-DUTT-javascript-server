import { Router } from "express";
import userObj from './index'
const UserRouter = Router();
UserRouter.get('/',userObj.get)
