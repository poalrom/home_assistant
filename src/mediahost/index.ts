import { Torrent } from "../models/Torrent";
import { connectToDb } from "../modules/db/connectToDb";

export function startMediahost() {
    connectToDb().then(() => {
        console.log("Schedule tasks");
        setInterval(Torrent.downloadAll, 60000);
    });
}