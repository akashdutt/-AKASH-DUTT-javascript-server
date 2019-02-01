import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
const configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
});
export { configuration };
