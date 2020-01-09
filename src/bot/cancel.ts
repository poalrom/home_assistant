import { ContextMessageUpdate } from "telegraf";

export function cancel(ctx: ContextMessageUpdate) {
    ctx.session.mode = undefined;

    ctx.reply("Всё сброшено, чем займемся дальше?");
}