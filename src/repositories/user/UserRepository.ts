import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export class UserRepository {
  public static genericObjectId() {
    return String(mongoose.Types.ObjectId);
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }
  public create(data:any) {
     return this.model.create({...data, id: UserRepository.genericObjectId});
  }
  public delete() {
    this.model.deleteOne({name: 'Akash Dutt'}, (err) => {});
  }
  public update(data, newValues) {
    this.model.updateOne(data, newValues, (err, res) => {
      if (err) { throw err; }
      console.log('1 document updated');
    });
  }
  public countUser():mongoose.Query<number> {
    return this.model.countDocuments({});
	}
	public findOne(query){
		return this.model.findOne(query)
	}
}
