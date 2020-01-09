import { ContextMessageUpdate } from "telegraf";

const acceptedUsers = ["poalrom"];

export function accessControl(ctx: ContextMessageUpdate, next: () => any) {
    if (!acceptedUsers.includes(ctx.from.username)) {
        ctx.reply("Вы кто такие? Я вас не звал!");
        return;
    }

    next();
}