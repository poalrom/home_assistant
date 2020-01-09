import dotenv from "dotenv";

dotenv.config();

import { startWeb } from "./web";
import { startBot } from "./bot";

enum APP_MODES {
    web = "web",
    bot = "bot",
    alice = "alice",
}

const modes = (process.env.MODES || "web,bot,alice").split(",");

if (modes.includes(APP_MODES.web)) {
    startWeb();
}

if (modes.includes(APP_MODES.bot)) {
    startBot();
}
