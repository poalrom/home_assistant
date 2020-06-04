import assert from "assert";
import { APP_MODE } from "./types/AppMode";

export const config = {
    port: Number(process.env.HA_PORT) || 0,
    db: {
        host: process.env.DB_HOST || "",
        port: Number(process.env.DB_PORT) || 0,
        name: process.env.DB_NAME || "",
        user: process.env.DB_USER || "",
        password: process.env.DB_PASSWORD || "",
    },
    bot: {
        secretPath: process.env.BOT_SECRET_PATH || "",
        token: process.env.BOT_TOKEN || "",
    },
    alice: {
        secretPath: process.env.ALICE_SECRET_PATH || "",
    },
    proxyUser: process.env.PROXY_USER || "",
    proxyPassword: process.env.PROXY_PASSWORD || "",
    downloadPath: process.env.DOWNLOAD_PATH || "",
    modes: process.env.MODES || "bot,mediahost",
    torrentClientUrl: process.env.TORRENT_CLIENT_URL || "",
    pcMacAdresses: {
        main: process.env.MAIN_MAC || "",
        secondary: process.env.SECONDARY_MAC || "",
        media: process.env.MEDIA_MAC || "",
        mediaScreen: process.env.MEDIA_SCREEN_MAC || "",
    },
};

function getErrorMessage(configField: string) {
    return `Env variable "${configField}" should exists`;
}

export function checkConfig() {
    assert.notEqual(config.port, 0, getErrorMessage("HA_PORT"));
    assert.notEqual(config.db.host.length, 0, getErrorMessage("DB_HOST"));
    assert.notEqual(config.db.port, 0, getErrorMessage("DB_PORT"));
    assert.notEqual(config.db.name.length, 0, getErrorMessage("DB_NAME"));
    assert.notEqual(config.db.user.length, 0, getErrorMessage("DB_USER"));
    assert.notEqual(config.db.password.length, 0, getErrorMessage("DB_PASSWORD"));
    if (!config.modes.length || config.modes.includes(APP_MODE.bot)) {
        assert.notEqual(config.bot.secretPath.length, 0, getErrorMessage("BOT_SECRET_PATH"));
        assert.notEqual(config.bot.token.length, 0, getErrorMessage("BOT_TOKEN"));
    }
    if (!config.modes.length || config.modes.includes(APP_MODE.bot)) {
        assert.notEqual(config.alice.secretPath.length, 0, getErrorMessage("ALICE_SECRET_PATH"));
    }
    if (!config.modes.length || config.modes.includes(APP_MODE.mediahost)) {
        assert.notEqual(config.proxyUser.length, 0, getErrorMessage("PROXY_USER"));
        assert.notEqual(config.proxyPassword.length, 0, getErrorMessage("PROXY_PASSWORD"));
        assert.notEqual(config.downloadPath.length, 0, getErrorMessage("DOWNLOAD_PATH"));
        assert.notEqual(config.torrentClientUrl.length, 0, getErrorMessage("TORRENT_CLIENT_URL"));
    }
}