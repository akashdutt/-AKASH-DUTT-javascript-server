import * as mongoose from 'mongoose';
import seedData, { deleteRecords, updateRecords } from './seedData';
class Database {
  public static async open(mongoUrl) {
    try {
      console.log(mongoUrl);
      const result = await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
      });
      if (result) {
        seedData();
        console.log('connected to database');
      }
    } catch (err) {
      console.log('not connected', err);
    }
  }
  public static disconnect() {
    mongoose.disconnect();
    console.log('connection disconnected');
  }
}
export default Database;
