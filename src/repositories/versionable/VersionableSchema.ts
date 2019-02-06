import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(collections, options) {
    const versionSchema = Object.assign(collections, {
      createdAt: {
        default: Date.now,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
    });
    super(versionSchema, options);
  }
}
