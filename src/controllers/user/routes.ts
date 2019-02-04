import { Router } from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from '../../libs/routes/validationHandler';
import validation from '../trainee/validation';
import userObj from './index';
const UserRouter = Router();
UserRouter
  .get('/', authMiddleWare('TRAINEE', 'read'), userObj.get)
  .post('/', validationHandler(validation.create), userObj.create)
  .put('/', validationHandler(validation.update), userObj.update)
  .delete('/:id', validationHandler(validation.delete), userObj.delete);
export default UserRouter;
