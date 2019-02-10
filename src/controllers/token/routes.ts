import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import tokenObj from './Controllertoken';
import validation from './validation';
const tokenRouter = Router();
tokenRouter
  .post('/',  validationHandler(validation.create) , tokenObj.create);
export default tokenRouter;
