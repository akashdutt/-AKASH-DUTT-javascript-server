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
  public async versionCreate(data: any): Promise<D> {
    const id = VersionableRepository.genericObjectId();
    return await this.model.create({
      ...data,
      _id: id,
      originalId: id,
    });
  }
  public async versionUpdate(originalId: any, newValues: any) {
    const record = await this.model
      .findOne({ _id: originalId, deletedAt: { $exists: false } })
      .lean();
    const date = new Date();
    const newData = Object.assign(record, newValues, { createdAt: date });
    await this.model.create(...newData);
    return await this.model.updateOne({ _id: record._id }, { deletedAt: date });
  }
  public async versionDelete(data) {
    const result = await this.model.findOne({_id: data});
    return await this.model.updateOne(
      { _id: result._id , deletedAt: { $exists: false } },
      { deletedAt: Date.now() },
    );
  }
  public async countUser(): mongoose.Query<number> {
    return await this.model.countDocuments({});
  }
  public async findAll(userRole, userLimit, userSkip): mongoose.DocumentQuery<D, D, {}> {
    try {
      userLimit = Number(userLimit);
      userSkip = Number(userSkip);
      return await this.model.find(userRole, undefined , { limit: userLimit, skip: userSkip });
    }
    catch (err) {
      console.log(err);
    }
  }
  public async findOne(query): mongoose.DocumentQuery<D, D, {}> {
    return await this.model.findOne(query);
  }
}
