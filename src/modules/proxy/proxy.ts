import HttpsProxyAgent from "https-proxy-agent";
import { config } from "../../config";

const username = config.proxyUser;
const password = config.proxyPassword;
const port = 22225;
const session_id = (1000000 * Math.random()) | 0;
const super_proxy = "http://" + username + "-country-gb-session-" + session_id + ":" + password + "@zproxy.lum-superproxy.io:" + port;

export const proxy = new HttpsProxyAgent(super_proxy);