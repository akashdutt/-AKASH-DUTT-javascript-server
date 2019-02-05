import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(collections, options) {
      const versionSchema = Object.assign( collections, {
      createdAt: {
        default: Date.now,
        type: Date,
      },
      originalId: {
        require: true,
        type: String,
      },
    });
      super(versionSchema, options);
  }
}
