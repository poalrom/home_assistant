"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_proxy_agent_1 = __importDefault(require("https-proxy-agent"));
const username = process.env.LUMINATI_USER;
const password = process.env.LUMINATI_PASSWORD;
const port = 22225;
const session_id = (1000000 * Math.random()) | 0;
const super_proxy = "http://" + username + "-country-gb-session-" + session_id + ":" + password + "@zproxy.lum-superproxy.io:" + port;
exports.proxy = new https_proxy_agent_1.default(super_proxy);
//# sourceMappingURL=proxy.js.map