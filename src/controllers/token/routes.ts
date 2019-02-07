import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import tokenObj from './Controllertoken';
const tokenRouter = Router();
tokenRouter
  .post('/',  validationHandler(validation.create) , tokenObj.create);
export default tokenRouter;
