import { env } from "./dotenv";
env();

import { startBot } from "./bot";
import { startMediahost } from "./mediahost";
import { APP_MODE } from "./types/AppMode";
import { checkConfig, config } from "./config";

checkConfig();

const modes = config.modes.split(",");

if (modes.includes(APP_MODE.bot)) {
    startBot();
}

if (modes.includes(APP_MODE.mediahost)) {
    startMediahost();
}
