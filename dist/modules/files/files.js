"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = require("fs");
const md5_1 = __importDefault(require("md5"));
const path_1 = require("path");
class Files {
    static async downloadFile(url, ext) {
        const fileName = md5_1.default(url) + "." + ext;
        const filePath = path_1.resolve(process.env.DOWNLOAD_PATH, fileName);
        console.log(`Download file ${filePath} from ${url}`);
        if (fs_1.existsSync(filePath)) {
            throw new Error(`File ${filePath} already exists`);
        }
        const torrentBuffer = await node_fetch_1.default(url);
        const writeStream = fs_1.createWriteStream(filePath);
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
exports.Files = Files;
//# sourceMappingURL=files.js.map