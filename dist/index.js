"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const web_1 = require("./web");
const bot_1 = require("./bot");
var APP_MODES;
(function (APP_MODES) {
    APP_MODES["web"] = "web";
    APP_MODES["bot"] = "bot";
    APP_MODES["alice"] = "alice";
})(APP_MODES || (APP_MODES = {}));
const modes = (process.env.MODES || "web,bot,alice").split(",");
if (modes.includes(APP_MODES.web)) {
    web_1.startWeb();
}
if (modes.includes(APP_MODES.bot)) {
    bot_1.startBot();
}
//# sourceMappingURL=index.js.map