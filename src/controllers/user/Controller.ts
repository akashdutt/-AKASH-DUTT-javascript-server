import successHandler from '../../libs/routes/successHandler';
import { UserRepository } from './../../repositories/user/UserRepository';
const userRepository = new UserRepository();
class UserController {
  public async get(req, res, next) {
    try {
      const { limit, skip } = req.query;
      console.log('skip is', skip, 'limit is', limit);
      const result = await userRepository.userFindAll(limit, skip);
      res.status(200).send(successHandler('received', result));
    } catch (err) {
      console.log('in userController get', err);
      next('cannot get');
    }
  }
  public create(req, res) {
    const { name, email } = req.body;
    console.log('created', req.body);
    userRepository
      .userCreate(req.body)
      .then((result) => {
        console.log('in create', result);
        res.status(200).send(successHandler(name, email));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  public update(req, res) {
    const { originalId, dataToUpdate } = req.body;
    console.log('>', name, '<');
    userRepository.userUpdate(originalId, dataToUpdate);
    res.status(200).send(successHandler('successfully updated', dataToUpdate));
  }
  public delete(req, res, next) {
    const { name, id } = req.body;
    const value = req.params.name;
    if (value !== name) {
      next({ error: 'not matched', name });
    }
    userRepository.userDelete({ name });
    res.status(200).send(successHandler('deleted', undefined));
  }
}
export default new UserController();
