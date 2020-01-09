"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yandex_dialogs_sdk_1 = require("yandex-dialogs-sdk");
const getEpisodeData_1 = require("../parsers/getEpisodeData");
const registerCommandByTriggers_1 = require("../utils/registerCommandByTriggers");
const normalize_1 = require("../parsers/normalize");
const getNumberByName_1 = require("../parsers/getNumberByName");
const textToBoolean_1 = require("../parsers/textToBoolean");
const triggers = [
    /^(я )?посмотрел сериал/ig,
];
const stage = new yandex_dialogs_sdk_1.Stage();
const WATCH_DETAILS_SCENE = "WATCH_DETAILS_SCENE";
const watchDetails = new yandex_dialogs_sdk_1.Scene(WATCH_DETAILS_SCENE);
const WATCH_APPROVE_SCENE = "WATCH_APPROVE_SCENE";
const watchApprove = new yandex_dialogs_sdk_1.Scene(WATCH_APPROVE_SCENE);
stage.addScene(watchDetails);
stage.addScene(watchApprove);
async function handler(ctx) {
    const serialName = triggers.reduce((acc, trigger) => acc.replace(trigger, ""), ctx.message);
    ctx.session.set("serialName", serialName);
    ctx.enter(WATCH_DETAILS_SCENE);
    return yandex_dialogs_sdk_1.Reply.text("Какую серию какого сезона?");
}
function watch(alice) {
    alice.use(stage.getMiddleware());
    registerCommandByTriggers_1.registerCommandByTriggers(alice, triggers, handler);
}
exports.watch = watch;
watchDetails.any(async (ctx) => {
    const episodeData = getEpisodeData_1.getEpisodeData(ctx.message);
    if (typeof episodeData === "string") {
        return yandex_dialogs_sdk_1.Reply.text(episodeData);
    }
    const episodeNumber = getNumberByName_1.getNumberByName(await normalize_1.normalize(episodeData.episode));
    const seasonNumber = getNumberByName_1.getNumberByName(await normalize_1.normalize(episodeData.season));
    ctx.enter(WATCH_APPROVE_SCENE);
    return yandex_dialogs_sdk_1.Reply.text(`Правильно поняла:\nсериал ${ctx.session.get("serialName")}\n${seasonNumber} сезон ${episodeNumber} серия,`);
});
watchApprove.any(async (ctx) => {
    const watchApproveResult = textToBoolean_1.textToBoolean(ctx.message);
    if (typeof watchApproveResult === "string") {
        return yandex_dialogs_sdk_1.Reply.text(watchApproveResult);
    }
    ctx.leave();
    if (watchApproveResult) {
        return yandex_dialogs_sdk_1.Reply.text("Отлично! Записала");
    }
    return yandex_dialogs_sdk_1.Reply.text("Ну и ладно. Можешь попробовать еще");
});
//# sourceMappingURL=watch.js.map