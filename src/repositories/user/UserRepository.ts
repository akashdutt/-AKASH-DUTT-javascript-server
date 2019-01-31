import { userModel } from "./UserModel";
import IUserModel from "./IUserModel";
import * as mongoose from "mongoose";
export class UserRepository {
	private model: mongoose.Model<IUserModel>;
	constructor() {
		this.model = userModel;
	}
	static genericObjectId() {
		return String(mongoose.Types.ObjectId);
	}
	public create(data){
		 return this.model.create(data, UserRepository.genericObjectId())
	}
	public delete(){
		this.model.deleteOne({name:'Akash Dutt'}, function(err){});
	}
	public update(){
		this.model.update({ _id: '1234'}, { $set: { name: 'UpdatedUser' }});
	}
}
