import { ContextMessageUpdate } from "telegraf";

const commands = [
    "/add - добавить торрент для скачивания",
];

export function help(ctx: ContextMessageUpdate) {
    ctx.replyWithMarkdown(commands.join("\n"));
}