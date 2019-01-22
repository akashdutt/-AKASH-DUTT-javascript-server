import * as express from "express";
class Server {
	public app: express.Express;
	constructor(private config) {
		this.app = express();
	}
	public bootstrap() {
		this.setupRoutes();
		return this;
	}
	public setupRoutes() {
		this.app.get("/health-check", (req, res) => {
			res.send("I am OK");
		});
	}
	public run() {
		const {
			app,
			config: { port }
		} = this;
		app.listen(port, err => {
			if (err) {
				throw err;
			}
			console.log("app is running on ", port);
		});
	}
}
export { Server };
