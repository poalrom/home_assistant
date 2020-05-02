// @ts-ignore
import { wake } from "wol";
import { promisify } from "util";

const pWake = promisify(wake);

class PCAdmin {
    start(mac: string) {
        return pWake(mac);
    }
}

export const pcAdmin = new PCAdmin();