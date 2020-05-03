import { Context } from "telegraf";

const commands = [
    "/add - добавить торрент для скачивания",
    "/cancel - отменить все команды и уйти в главное меню",
];

export function help(ctx: Context) {
    ctx.replyWithMarkdown(commands.join("\n"));
}