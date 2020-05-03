import { env } from "./dotenv";
env();

import express, { json } from "express";
import { startBot } from "./bot";
import { startMediahost } from "./mediahost";
import { APP_MODE } from "./types/AppMode";
import { checkConfig, config } from "./config";
import { connectToDb } from "./modules/db/connectToDb";
import { startAlice } from "./alice";

checkConfig();

const modes = config.modes.split(",");
let startServer = false;
const app = express();

app.use(json());

if (modes.includes(APP_MODE.bot)) {
    startServer = true;
    startBot(app);
}

if (modes.includes(APP_MODE.alice)) {
    startServer = true;
    startAlice(app);
}

if (modes.includes(APP_MODE.mediahost)) {
    startMediahost();
}

if (startServer) {
    connectToDb().then(
        () => app.listen(
            config.port,
            () => console.log(`Listen on port ${config.port}`)
        )
    );
}
