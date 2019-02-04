import * as jwt from 'jsonwebtoken';
import { UserRepository } from './../../repositories/user/UserRepository';
import hasPermission from './permissions';
export default function authMiddleWare(module, permissionType) {
  return (req, res, next) => {
    console.log(module, permissionType);
    const token = req.headers.authorization;
    require('dotenv').config();
    const user = jwt.verify(token, process.env.KEY);
    const userRepository = new UserRepository();
    req.body.data = user;
    console.log('ROle of user', user._id);
    const {_id} = user;
    return userRepository.findOne({_id}).then((result) => {
      if (!user) {
        return next({ error: 'Unauthorized Access', status: res.status(403) });
      }
      req.body.result = result;
      if (!hasPermission(module, user.Role, permissionType)) {
      next({
          error: 'Permission Denied',
          message: `Access of ${permissionType} for ${user.Role} do not exist`,
        });
      }
      next();
    });
  };
}
