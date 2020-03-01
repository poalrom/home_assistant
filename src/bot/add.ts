import Telegraf, { ContextMessageUpdate } from "telegraf";
import { BotUserMode } from "../types/BotUserMode";
import { Torrent } from "../models/Torrent";

export function add(bot: Telegraf<ContextMessageUpdate>) {
    bot.command("add", (ctx) => {
        ctx.session.mode = BotUserMode.add;

        ctx.reply("Скидывай ссылку на торрент файл");
    });

    bot.on("text", async (ctx, next) => {
        if (ctx.session.mode !== BotUserMode.add) {
            next();

            return;
        }

        try {
            const torrent = new Torrent();

            torrent.url = ctx.message.text;

            await torrent.save();

            ctx.reply("Сохранил торрент для скачивания!");
        } catch (e) {
            ctx.replyWithMarkdown(`Произошла ошибка:\n\`\`\`${e}\`\`\``);
        } finally {
            ctx.session.mode = undefined;
        }
    });
}