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
  public userCreate(data) {
    return this.versionCreate(data);
  }
  public userDelete(data) {
    this.versionDelete(data);
  }
  public userUpdate(originalId, newValues) {
    this.versionUpdate(originalId, newValues );
  }
  public userFind(query) {
    return this.findOne(query);
  }
  public async userFindAll(userLimit, userSkip) {
    try {
    return await this.findAll(userLimit, userSkip);
    }
    catch (err) {
      console.log('in Userrepo userfindAll', err);
    }
  }
}
