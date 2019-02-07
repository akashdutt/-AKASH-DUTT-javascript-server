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
  public versionUpdate(originalId: any, newValues: any) {
    const record = this.model
      .findOne({ originalId, deletedAt: { $exists: false } })
      .lean();
    const date = new Date();
    const newData = Object.assign(record, newValues, { createdAt: date });
    this.model.create(...newData);
    this.model.updateOne({ _id: record._id }, { deletedAt: date });
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
  public async findAll(userLimit, userSkip) {
    try {
      userLimit = Number(userLimit);
      userSkip = Number(userSkip);
      return await this.model.find({}, undefined , { limit: userLimit, skip: userSkip });
    }
    catch (err) {
      console.log(err);
    }
  }
  public findOne(query): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(query);
  }
}
