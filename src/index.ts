import { env } from "./dotenv";
env();

import { startBot } from "./bot";
import { schedule } from "./schedule";

enum APP_MODES {
    bot = "bot",
    schedule = "schedule",
}

const modes = (process.env.MODES || "web,bot,schedule").split(",");

if (modes.includes(APP_MODES.bot)) {
    startBot();
}

if (modes.includes(APP_MODES.schedule)) {
    schedule();
}
