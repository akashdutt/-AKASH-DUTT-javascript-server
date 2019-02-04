import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
const configuration: IConfig = Object.freeze({
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT,
});
export { configuration };
