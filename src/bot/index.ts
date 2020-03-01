import Telegraf, { session } from "telegraf";
import { add } from "./add";
import { help } from "./help";
import { accessControl } from "./access-control";
import { cancel } from "./cancel";
import { connectToDb } from "../modules/db/connectToDb";
import { parseRutrackerAnswer } from "./parse-rutracker-answer";
import { config } from "../config";

const bot = new Telegraf(config.botToken);

bot.use(accessControl).use(session());

add(bot);
parseRutrackerAnswer(bot);

bot.help(help);
bot.command("cancel", cancel);

bot.on("text", function (ctx) {
    ctx.reply("Моя твоя не понимать. Может /help ?");
});

export function startBot() {
    console.log("Start bot");
    launchBot();
}

async function launchBot() {
    try {
        await connectToDb();
        await bot.launch();
        console.log("Bot started");
    } catch (e) {
        console.error("Connection error", e);
        await launchBot();
    }
}