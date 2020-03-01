import assert from "assert";
import { APP_MODE } from "./types/AppMode";

export const config = {
    dbUrl: process.env.DB_URL || "",
    botToken: process.env.BOT_TOKEN || "",
    proxyUser: process.env.LUMINATI_USER || "",
    proxyPassword: process.env.LUMINATI_PASSWORD || "",
    downloadPath: process.env.DOWNLOAD_PATH || "",
    modes: process.env.MODES || "bot,schedule",
    torrentClientUrl: process.env.TORRENT_CLIENT_URL || "",
};

function getErrorMessage(configField: string) {
    return `Env variable "${configField}" should exists`;
}

export function checkConfig() {
    assert.notEqual(config.dbUrl.length, 0, getErrorMessage("DB_URL"));
    if (!config.modes.length || config.modes.includes(APP_MODE.bot)) {
        assert.notEqual(config.botToken.length, 0, getErrorMessage("BOT_TOKEN"));
    }
    if (!config.modes.length || config.modes.includes(APP_MODE.schedule)) {
        assert.notEqual(config.proxyUser.length, 0, getErrorMessage("LUMINATI_USER"));
        assert.notEqual(config.proxyPassword.length, 0, getErrorMessage("LUMINATI_PASSWORD"));
        assert.notEqual(config.downloadPath.length, 0, getErrorMessage("DOWNLOAD_PATH"));
        assert.notEqual(config.torrentClientUrl.length, 0, getErrorMessage("TORRENT_CLIENT_URL"));
    }
}