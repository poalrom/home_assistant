import { IIntentContext, Reply } from "yandex-dialogs-sdk";

export function defaultCommand(ctx: IIntentContext) {
    return Reply.text("Я тебя не поняла");
}