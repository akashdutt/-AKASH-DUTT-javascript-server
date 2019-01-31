import * as mongoose from "mongoose";
class Database {
	static open(mongoUrl) {
		return new Promise(function(resolve, reject) {
			mongoose
				.connect(
					mongoUrl,
					{ useNewUrlParser: true }
				)
				.then(result => {
					resolve("success");
					console.log("connected to database");
					const userSchema = new mongoose.Schema({
						firstName: String,
						lastName: String
					});
					const User = mongoose.model("User",userSchema);
					const user1 = new User({ firstName: "Akash", lastName: "Dutt" });
					user1.save(function(err) {
						if (err) throw err;

						console.log("User saved successfully!");
					});
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
