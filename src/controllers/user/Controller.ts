import successHandler from '../../libs/routes/successHandler';
import { UserRepository } from './../../repositories/user/UserRepository';
const userRepository = new UserRepository();
class UserController {
  public get(req, res) {
    const { result } = req.body;
    res.status(200).send(successHandler('received', result));
  }
  public create(req, res) {
    const { name, email } = req.body;
    userRepository.userCreate(req.body).then(() => {
      res.status(200).send(successHandler(name, email));
    });
  }
  public update(req, res) {
    const { name, dataToUpdate } = req.body;
    console.log('>', name, '<');
    userRepository.userUpdate(name, dataToUpdate);
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
