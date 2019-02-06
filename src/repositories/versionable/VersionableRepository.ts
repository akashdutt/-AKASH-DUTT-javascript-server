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
    const item = Object.keys(newValues);
    const value = Object.values(item);
    data.value = value ;
    const createDate = new Date();
    data.createdAt = createDate;
    const oldId = data._id ;
    data._id = VersionableRepository.genericObjectId();
    return this.model.updateOne({_id: oldId} , { $set: { deletedAt: createDate}}).then(() => {
      return this.model.insertMany(data);
    });
  }
  public versionDelete(data) {
    this.model.updateOne(
      { ...data, deletedAt: { $exists: false } },
      { deletedAt: Date.now() },
    );
  }
  public countUser(): mongoose.Query<number> {
    return this.model.countDocuments({});
  }
  public findOne(query): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(query);
  }
}
