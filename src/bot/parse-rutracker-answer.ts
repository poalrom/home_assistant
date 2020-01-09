import Telegraf, { ContextMessageUpdate } from "telegraf";
import { Torrent } from "../models/Torrent";
import { BotUserMode } from "../types/BotUserMode";

export function parseRutrackerAnswer(bot: Telegraf<ContextMessageUpdate>) {
    bot.on("message", async (ctx, next) => {
        if (!ctx.message.forward_from || ctx.message.forward_from.username !== "ru_tracker_bot") {
            return next();
        }

        try {
            const torrent = new Torrent();
            torrent.url = getMagnetLink(ctx.message.text);
            await torrent.save();

            ctx.reply("Сохранил торрент для скачивания!");
        } catch (e) {
            ctx.replyWithMarkdown(`Произошла ошибка:\n\`\`\`${e}\`\`\``);
        } finally {
            ctx.session.mode = undefined;
        }
    });
}

function getMagnetLink(text: string) {
    return "magnet:" + text.split("magnet:").pop();
}