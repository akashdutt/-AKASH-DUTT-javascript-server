import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import successHandler from '../../libs/routes/successHandler';
import { UserRepository } from './../../repositories/user/UserRepository';
class Controllertoken {
  public create(req, res, next) {
    const { email, userPassword } = req.body;
    const userRepository = new UserRepository();
    userRepository.userFind({ email }).then((result) => {
      const { PASSWORD } = result;
      bcrypt.compare(userPassword, PASSWORD, (err, match) => {
        if (match === true) {
          const key = process.env.KEY;
          const token = jwt.sign(
            {
              result,
            },
            key,
            { expiresIn: 15 * 60 },
          );
          res.status(200).send(successHandler(token, email));
        } else {
          next('cannot find password');
        }
      });
    });
  }
}
export default new Controllertoken();
