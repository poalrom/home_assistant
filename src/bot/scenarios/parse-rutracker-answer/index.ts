import { Context } from "telegraf";
import { Torrent } from "../../../models/Torrent";
import { NextFunction } from "express";

export async function parseRutrackerAnswer(ctx: Context, next: NextFunction) {
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
        next();
    }
}

function getMagnetLink(text: string) {
    return "magnet:" + text.split("magnet:").pop();
}