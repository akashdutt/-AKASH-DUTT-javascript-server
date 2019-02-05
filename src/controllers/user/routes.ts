import { Router } from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import userObj from './index';
const UserRouter = Router();
UserRouter
  .get('/', authMiddleWare('TRAINEE', 'read'), validationHandler(validation.get) , userObj.get)
  .post('/', authMiddleWare('TRAINEE', 'read') , validationHandler(validation.create) , userObj.create)
  .put('/',  authMiddleWare('TRAINEE', 'write') , validationHandler(validation.update), userObj.update)
  .delete('/:name', authMiddleWare('TRAINEE', 'delete') , validationHandler(validation.delete), userObj.delete);
export default UserRouter;
