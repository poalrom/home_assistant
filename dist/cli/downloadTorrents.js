"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectToDb_1 = require("../modules/db/connectToDb");
const Torrent_1 = require("../models/Torrent");
const DownloadStatus_1 = require("../types/DownloadStatus");
async function run() {
    await connectToDb_1.connectToDb();
    const torrents = await Torrent_1.Torrent.find({ status: DownloadStatus_1.DownloadStatus.EMPTY });
    for (const torrent of torrents) {
        await torrent.download();
    }
    process.exit(0);
}
run();
//# sourceMappingURL=downloadTorrents.js.map