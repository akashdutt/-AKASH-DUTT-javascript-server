import { IConfig } from "./IConfig";
import { config } from "dotenv";
config();
const configuration: IConfig = Object.freeze({
	port: process.env.PORT,
	mongoUrl:process.env.MONGO_URL
});
export { configuration };
