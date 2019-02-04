import successHandler from '../../libs/routes/successHandler';
class TraineeController {
  public get(req, res) {
    const data = {
      id: '0011',
      name: 'Akash',
    };
    res.status(200).send(successHandler('received', data));
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
export default new TraineeController();
