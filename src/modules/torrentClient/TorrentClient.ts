import fetch from "node-fetch";
import FormData from "form-data";

class QbitTorrentClient {
    private sid: string;

    constructor(private port: string) {}

    get isAuthorized() {
        return !!this.sid;
    }

    async addMagnet(link: string) {
        const formData = new FormData();
        formData.append("urls", link);

        const addRequest = await fetch(
            `http://localhost:${this.port}/api/v2/torrents/add`,
            {
                method: "POST",
                headers: {
                    Referer: `http://localhost:${this.port}`,
                    Cookies: this.sid,
                },
                // @ts-ignore
                body: formData,
            },
        );

        console.log(addRequest);
    }

    async auth() {
        const authRequest = await fetch(
            `http://localhost:${this.port}/api/v2/auth/login`,
            {
                headers: {
                    Referer: `http://localhost:${this.port}`,
                },
            },
        );

        if (authRequest.status !== 200) {
            return;
        }

        const cookies = authRequest.headers.get("set-cookie");
        const sid = cookies.match(/SID=([^\s;]+)/g)[0];

        if (!sid.length) {
            return;
        }

        this.sid = sid;
    }
}

let torrentClient: QbitTorrentClient;

export async function getTorrentClient(port: string) {
    if (!torrentClient) {
        torrentClient = new QbitTorrentClient(port);
    }

    if (!torrentClient.isAuthorized) {
        await torrentClient.auth();
    }

    return torrentClient;
}
