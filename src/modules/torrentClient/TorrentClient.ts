import fetch from "node-fetch";
import FormData from "form-data";

class QbitTorrentClient {
    private sid: string;

    constructor(private url: string) {}

    get isAuthorized() {
        return !!this.sid;
    }

    async addMagnet(link: string) {
        const formData = new FormData();
        formData.append("urls", link);

        const addRequest = await fetch(
            `${this.url}/api/v2/torrents/add`,
            {
                method: "POST",
                headers: {
                    Referer: `${this.url}`,
                    Cookies: this.sid,
                },
                body: formData,
            },
        );

        console.log(addRequest);
    }

    async auth() {
        const authRequest = await fetch(
            `${this.url}/api/v2/auth/login`,
            {
                headers: {
                    Referer: `${this.url}`,
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

const torrentClients: Record<string, QbitTorrentClient> = {};

export async function getTorrentClient(url: string) {
    if (!torrentClients[url]) {
        torrentClients[url] = new QbitTorrentClient(url);
    }

    if (!torrentClients[url].isAuthorized) {
        await torrentClients[url].auth();
    }

    return torrentClients[url];
}
