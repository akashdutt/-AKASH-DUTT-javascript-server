import * as mongoose from 'mongoose';
export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const baseSchema = {
			name: String,
			role: String,
			email: String
    };
    super(baseSchema, options);
  }
}
