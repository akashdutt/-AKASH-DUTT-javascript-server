import * as mongoose from 'mongoose';
export class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static genericObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  public model: M;
  constructor(Model) {
    this.model = Model;
  }
  public versionCreate(data: any): Promise<D> {
    const id = VersionableRepository.genericObjectId();
    return this.model.create({
      ...data,
      _id: id,
      originalId: id,
    });
  }
  public versionUpdate(data, newValues) {
    this.model.updateOne(data, newValues, (err, res) => {
      if (err) {
        throw err;
      }
      console.log('1 document updated');
    });
  }
  public versionDelete(data) {
    // tslint:disable-next-line: no-empty
    this.model.deleteOne(data, (err) => {});
  }
  public countUser(): mongoose.Query<number> {
    return this.model.countDocuments({});
  }
  public findOne(query): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(query);
  }
}
