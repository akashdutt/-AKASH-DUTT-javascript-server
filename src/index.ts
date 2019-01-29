import { configuration } from "./config/configuration";
import { Server } from "./Server";
export { default as router } from "./router";
const server = new Server(configuration);
server.bootstrap().run();
