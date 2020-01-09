"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Torrent_1 = require("../models/Torrent");
function parseRutrackerAnswer(bot) {
    bot.on("message", async (ctx, next) => {
        if (!ctx.message.forward_from || ctx.message.forward_from.username !== "ru_tracker_bot") {
            return next();
        }
        try {
            const torrent = new Torrent_1.Torrent();
            torrent.url = getMagnetLink(ctx.message.text);
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
exports.parseRutrackerAnswer = parseRutrackerAnswer;
function getMagnetLink(text) {
    return "magnet:" + text.split("magnet:").pop();
}
//# sourceMappingURL=parse-rutracker-answer.js.map