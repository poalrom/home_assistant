import { BaseScene, Stage } from "telegraf";
import { Torrent } from "../../../models/Torrent";

const SCENE_ID = "add-torrent";

const scene = new BaseScene(SCENE_ID);

scene.enter((ctx) => ctx.reply("Скидывай ссылку на торрент файл"));

scene.on("text", async (ctx, next) => {
    try {
        const torrent = new Torrent();

        torrent.url = ctx.message.text;

        await torrent.save();

        ctx.reply("Сохранил торрент для скачивания!");
    } catch (e) {
        ctx.replyWithMarkdown(`Произошла ошибка:\n\`\`\`${e}\`\`\``);
    }
});

export const addTorrentScene = {
    id: SCENE_ID,
    scene,
    command: "add",
};
