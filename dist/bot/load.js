"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotUserMode_1 = require("../types/BotUserMode");
const files_1 = require("../modules/files/files");
function load(bot) {
    bot.command("load", (ctx) => {
        ctx.session.mode = BotUserMode_1.BotUserMode.load;
        ctx.reply("Скидывай ссылку на торрент файл");
    });
    bot.on("text", async (ctx, next) => {
        if (ctx.session.mode !== BotUserMode_1.BotUserMode.load) {
            next();
            return;
        }
        try {
            await files_1.Files.downloadFile(ctx.message.text, "torrent");
            ctx.reply("Файл скачан!");
        }
        catch (e) {
            ctx.replyWithMarkdown(`Произошла ошибка:\n\`\`\`${e}\`\`\``);
        }
        finally {
            ctx.session.mode = undefined;
        }
    });
}
exports.load = load;
//# sourceMappingURL=load.js.map