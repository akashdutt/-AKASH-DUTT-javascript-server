import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from './../../repositories/user/UserRepository';
import hasPermission from './permissions';
export default function authMiddleWare(module, permissionType) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers.authorization;
    require('dotenv').config();
    const user = jwt.verify(token, process.env.KEY);
    const userRepository: UserRepository = new UserRepository();
    req.body.data = user;
    const { _id } = user;
    if (user) {
      const result = await userRepository.findOne({ _id});
      try {
        req.body.result = result;
        if (!hasPermission(module, result.role, permissionType)) {
          return next({
            error: 'Permission Denied',
            message: `Access of ${permissionType} for ${user.Role} do not exist`,
          });
        }
        next();
      }
      catch (err) {
        console.log(err);
      }
    } else {
      next({ error: 'Unauthorized Access', status: res.status(403) });
    }
  };
}
