import * as express from 'express';
import traineeRouter from './controllers/trainee/routes';
import { UserRouter } from './controllers/user/index';
const router = express.Router();
router.use('/trainee', traineeRouter);
router.use('/User', UserRouter);
export default router;
