import { NextFunction, Request, Response } from 'express';
import successHandler from '../../libs/routes/successHandler';
class TraineeController {
  public get(req: Request, res: Response) {
    const data: object = {
      id: '0011',
      name: 'Akash',
    };
    res.status(200).send(successHandler('received', data));
  }
  public create(req: Request, res: Response) {
    const { name, id } = req.body;
    res.status(200).send(successHandler(name, id));
  }
  public update(req: Request, res: Response) {
    const { id } = req.body;
    res.status(200).send(successHandler('successfully updated', id));
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const value: string = req.params.id;
    if (value !== id) {
      next({ error: 'not matched', id });
    }
    res.status(200).send(successHandler('deleted', undefined));
  }
}
export default new TraineeController();
