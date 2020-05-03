import { Context } from "telegraf";

const acceptedUsers = ["poalrom", "banfreya"];

export function accessControl(ctx: Context, next: () => any) {
    if (!acceptedUsers.includes(ctx.from.username.toLocaleLowerCase())) {
        ctx.reply("Вы кто такие? Я вас не звал!");
        return;
    }

    next();
}