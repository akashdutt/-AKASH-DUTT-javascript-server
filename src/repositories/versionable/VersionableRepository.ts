import * as mongoose from 'mongoose';
export class VersionableRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
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
  public versionUpdate(data: any, newValues: any) {
    this.model.updateMany(data, newValues, (err, res) => {
      if (err) {
        console.log('error:---', err);
        throw err;
      }
      console.log('1 document updated');
    });
  }
  public versionDelete(data) {
    this.model.deleteOne(data, (err) => {
      throw err;
    });
  }
  public countUser(): mongoose.Query<number> {
    return this.model.countDocuments({});
  }
  public findOne(query): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(query);
  }
}
