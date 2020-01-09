"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const files_1 = require("../../modules/files/files");
function downloadTorrent(url) {
    return files_1.Files.downloadFile(url, "torrent");
}
exports.downloadTorrent = downloadTorrent;
//# sourceMappingURL=downloadTorrent.js.map