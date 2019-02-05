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
    public userDelete() {
  // tslint:disable-next-line: no-empty
      this.versionDelete({name: 'Akash Dutt'});
    }
  public userUpdate(data, newValues) {
    this.versionUpdate(data, newValues);
  }
}
