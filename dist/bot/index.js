"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = __importStar(require("telegraf"));
const proxy_1 = require("../modules/proxy/proxy");
const add_1 = require("./add");
const help_1 = require("./help");
const access_control_1 = require("./access-control");
const cancel_1 = require("./cancel");
const connectToDb_1 = require("../modules/db/connectToDb");
const parse_rutracker_answer_1 = require("./parse-rutracker-answer");
const bot = new telegraf_1.default(process.env.BOT_TOKEN, {
    telegram: {
        agent: proxy_1.proxy,
    }
});
bot.use(access_control_1.accessControl).use(telegraf_1.session());
add_1.add(bot);
parse_rutracker_answer_1.parseRutrackerAnswer(bot);
bot.help(help_1.help);
bot.command("cancel", cancel_1.cancel);
bot.on("text", function (ctx) {
    ctx.reply("Моя твоя не понимать. Может /help ?");
});
function startBot() {
    launchBot();
    console.log("Start bot");
}
exports.startBot = startBot;
async function launchBot() {
    try {
        await connectToDb_1.connectToDb();
        await bot.launch();
    }
    catch (e) {
        console.error("Connection error", e);
        launchBot();
    }
}
//# sourceMappingURL=index.js.map