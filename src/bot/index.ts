import { Express } from "express";
import { accessControl } from "./access-control";
import { config } from "../config";
import Telegraf, { session, Stage } from "telegraf";
import { dump } from "./dump";
import { help } from "./help";
import { parseRutrackerAnswer } from "./scenarios/parse-rutracker-answer";
import { addTorrentScene } from "./scenarios/add-torrent";

const bot = new Telegraf(config.bot.token);

bot.webhookReply = true;

const stage = new Stage([
    addTorrentScene.scene
]);

stage.command(addTorrentScene.command, (ctx) => ctx.scene.enter(addTorrentScene.id));

stage.command("cancel", Stage.leave());

bot.use(accessControl)
    .use(session())
    .use(stage.middleware())
    .on("message", parseRutrackerAnswer)
    .on("message", Stage.leave())
    .help(help);

bot.on("message", dump);

export function startBot(app: Express) {
    app.post(config.bot.secretPath, async (req, res) => {
        await bot.handleUpdate(req.body, res);
    });
}