import { TelegrafContext } from "telegraf";

export function cancel(ctx: TelegrafContext) {
    ctx.session.mode = undefined;

    console.log("Всё сброшено, чем займемся дальше?");

    ctx.reply("Всё сброшено, чем займемся дальше?");
}