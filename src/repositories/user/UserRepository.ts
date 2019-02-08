import * as mongoose from 'mongoose';
import { VersionableRepository } from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export class UserRepository extends VersionableRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  constructor() {
    super(userModel);
  }
  public async userCreate(data: object): Promise<IUserModel> {
    return await this.versionCreate(data);
  }
  public async userDelete(data) {
    return await this.versionDelete(data);
  }
  public async userUpdate(originalId, newValues) {
    return await this.versionUpdate(originalId, newValues );
  }
  public async userFind(query) {
    return await this.findOne(query);
  }
  public async userFindAll(userRole, userLimit, userSkip) {
    try {
    return await this.findAll(userRole, userLimit, userSkip);
    }
    catch (err) {
      console.log('in UserRepository UserFindAll', err);
    }
  }
}
