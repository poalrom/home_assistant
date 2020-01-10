import dotenv from "dotenv";

import "../.env";

dotenv.config();

import { startWeb } from "./web";
import { startBot } from "./bot";
import { schedule } from "./schedule";

enum APP_MODES {
    web = "web",
    bot = "bot",
    schedule = "schedule",
}

const modes = (process.env.MODES || "web,bot,schedule").split(",");

if (modes.includes(APP_MODES.web)) {
    startWeb();
}

if (modes.includes(APP_MODES.bot)) {
    startBot();
}

if (modes.includes(APP_MODES.schedule)) {
    schedule();
}
