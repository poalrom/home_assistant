import { Express } from "express";
import { Alice, Reply } from "yandex-dialogs-sdk";
import { config } from "../config";
import { intentRouter } from "./intent-router";

const alice = new Alice();

alice.any(async (ctx) => {
    return await intentRouter(ctx);
});

export function startAlice(app: Express) {
    app.post(config.alice.secretPath, async (req, res) => {
        console.log(req.body);
        const answer = await alice.handleRequest(req.body);
        console.log(answer);
        res.json(answer);
    });
}