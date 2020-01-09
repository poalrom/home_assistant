import fetch from "node-fetch";
import { createWriteStream, existsSync } from "fs";
import md5 from "md5";
import { resolve } from "path";

export class Files {
    static async downloadFile(url: string, ext: string) {
        const fileName = md5(url) + "." + ext;
        const filePath = resolve(process.env.DOWNLOAD_PATH, fileName);

        console.log(`Download file ${filePath} from ${url}`);

        if (existsSync(filePath)) {
            throw new Error(`File ${filePath} already exists`);
        }

        const torrentBuffer = await fetch(url);
        const writeStream = createWriteStream(filePath);

        return new Promise((res, rej) => {
            torrentBuffer.body.pipe(writeStream);
            torrentBuffer.body.on("error", (err) => {
                rej(err);
            });
            writeStream.on("finish", function () {
                res();
            });
        });
    }
}