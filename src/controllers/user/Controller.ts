import successHandler from '../../libs/routes/successHandler';
import { UserRepository } from './../../repositories/user/UserRepository';
class UserController {
  public get(req, res) {
    const { email , name } = req.body.data ;
    const data = {email , name};
    const {result} = req.body;
    res.status(200).send(successHandler('received', result));
  }
  public create(req, res) {
    const { name, id } = req.body;
    res.status(200).send(successHandler(name, id));
  }
  public update(req, res) {
    const { name, id } = req.body;
    res.status(200).send(successHandler('successfully updated', id));
  }
  public delete(req, res, next) {
    const { name, id } = req.body;
    const value = req.params.id;
    if (value !== id) {
      next({ error: 'not matched', id });
    }
    res.status(200).send(successHandler('deleted', undefined));
  }
}
export default new UserController();
