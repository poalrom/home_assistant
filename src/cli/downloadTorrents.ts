import dotenv from "dotenv";

dotenv.config();

import { connectToDb } from "../modules/db/connectToDb";
import { Torrent } from "../models/Torrent";
import { DownloadStatus } from "../types/DownloadStatus";

async function run() {
    await connectToDb();

    const torrents = await Torrent.find({ status: DownloadStatus.EMPTY });

    for (const torrent of torrents) {
        await torrent.download();
    }

    process.exit(0);
}

run();