import { startPC } from "./commands/startPC";
import { defaultCommand } from "./commands/defaultCommand";
import { IIntentContext, CommandCallback } from "yandex-dialogs-sdk";

const routes: Record<string, CommandCallback<IIntentContext>> = {
    startPC,
    defaultCommand,
};

export function intentRouter(ctx: IIntentContext) {
    if (!ctx.nlu || !ctx.nlu.intents) {
        return routes.defaultCommand(ctx);
    }

    const intent = Object.keys(ctx.nlu.intents)[0];

    if (intent in routes) {
        return routes[intent](ctx);
    }

    return routes.defaultCommand(ctx);
}