import { NextFunction, Request, Response } from 'express';
import IUserModel from 'src/repositories/user/IUserModel';
import successHandler from '../../libs/routes/successHandler';
import { UserRepository } from './../../repositories/user/UserRepository';
const userRepository = new UserRepository();
class UserController {
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit = 10, skip = 0 } = req.query;
      const result = await userRepository.userFindAll(
        { role: 'trainee' },
        limit,
        skip,
      );
      const count = await userRepository.countUser();
      res.status(200).send(successHandler(count + ': Total Documents', result));
    } catch (err) {
      console.log('in userController get', err);
      next('cannot get');
    }
  }
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const result: IUserModel = await userRepository.userCreate(req.body);
      console.log('in create', result);
      res.status(200).send(successHandler(name, email));
    } catch (err) {
      console.log('in user controller create', err);
      next('cannot create');
    }
  }
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { originalId, dataToUpdate } = req.body;
      await userRepository.userUpdate(originalId, dataToUpdate);
      res
        .status(200)
        .send(successHandler('successfully updated', dataToUpdate));
    } catch (err) {
      console.log('in user controller update ', err);
      next('cannot update');
    }
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const value = req.params.id;
      console.log('value', value);
      const result = await userRepository.userDelete(value);
      res.status(200).send(successHandler('deleted', result));
    } catch (err) {
      console.log('in user controller delete ', err);
      next('cannot delete');
    }
  }
}
export default new UserController();
