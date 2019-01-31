import * as mongoose from "mongoose";
import seedData, { deleteRecords, updateRecords } from "./seedData";
class Database {
	static open(mongoUrl) {
		return new Promise(function(resolve, reject) {
			mongoose
				.connect(
					mongoUrl,
					{ useNewUrlParser: true }
				)
				.then(result => {
					seedData();
					resolve("success");
					console.log("connected to database");
					// deleteRecords();
					updateRecords();
				})
				.catch(err => {
					reject("denied");
					console.log("not connected");
				});
		});
	}
	static disconnect() {
		mongoose.disconnect();
		console.log("connection disconnected");
	}
}
export default Database;
