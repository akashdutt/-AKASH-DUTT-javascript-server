import * as mongoose from 'mongoose';
export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const baseSchema = {
      email: String,
      name: String,
      role: String,

    };
    super(baseSchema, options);
  }
}
