import * as express from 'express';
import tokenRouter from './controllers/token/routes';
import traineeRouter from './controllers/trainee/routes';
import { UserRouter } from './controllers/user/index';
const router = express.Router();
router.use('/trainee', traineeRouter);
router.use('/User', UserRouter);
router.use('/token', tokenRouter);
export default router;
