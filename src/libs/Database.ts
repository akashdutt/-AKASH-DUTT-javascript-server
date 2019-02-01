import * as mongoose from 'mongoose';
import seedData, { deleteRecords, updateRecords } from './seedData';
class Database {
  public static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true },
        )
        .then((result) => {
          seedData();
          resolve('success');
          console.log('connected to database');
          // deleteRecords();
          updateRecords();
          resolve('success');
          console.log('connected to database');
          const userSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
          });
          const User = mongoose.model('User', userSchema);
          const user1 = new User({ firstName: 'Akash', lastName: 'Dutt' });
          user1.save((err) => {
            if (err) { throw err; }

            console.log('User saved successfully!');
          });
        })
        .catch((err) => {
          reject('denied');
          console.log('not connected');
        });
    });
  }
  public static disconnect() {
    mongoose.disconnect();
    console.log('connection disconnected');
  }
}
export default Database;
