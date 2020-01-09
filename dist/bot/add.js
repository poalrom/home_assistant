"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotUserMode_1 = require("../types/BotUserMode");
const Torrent_1 = require("../models/Torrent");
function add(bot) {
    bot.command("add", (ctx) => {
        ctx.session.mode = BotUserMode_1.BotUserMode.add;
        ctx.reply("Скидывай ссылку на торрент файл");
    });
    bot.on("text", async (ctx, next) => {
        if (ctx.session.mode !== BotUserMode_1.BotUserMode.add) {
            next();
            return;
        }
        try {
            const torrent = new Torrent_1.Torrent();
            torrent.url = ctx.message.text;
            await torrent.save();
            ctx.reply("Сохранил торрент для скачивания!");
        }
        catch (e) {
            ctx.replyWithMarkdown(`Произошла ошибка:\n\`\`\`${e}\`\`\``);
        }
        finally {
            ctx.session.mode = undefined;
        }
    });
}
exports.add = add;
//# sourceMappingURL=add.js.map