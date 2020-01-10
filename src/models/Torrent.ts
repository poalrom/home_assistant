import { Entity, Column, BaseEntity, ObjectID, ObjectIdColumn } from "typeorm";
import { DownloadStatus } from "../types/DownloadStatus";
import { Files } from "../modules/files/files";
import { getTorrentClient } from "../modules/torrentClient/TorrentClient";

@Entity()
export class Torrent extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    url: string;

    @Column()
    errorMessage: string;

    @Column()
    status: DownloadStatus = DownloadStatus.EMPTY;

    static async downloadAll() {
        const torrents = await Torrent.find({ status: DownloadStatus.EMPTY });

        for (const torrent of torrents) {
            await torrent.download();
        }
    }

    async download() {
        if (this.url.startsWith("magnet:")) {
            await this.downloadMagnet();
        } else {
            await this.downloadFile();
        }
    }

    private async downloadFile() {
        try {
            await Files.downloadFile(this.url, "torrent");

            this.status = DownloadStatus.FINISHED;
        } catch (e) {
            this.errorMessage = String(e);
            this.status = DownloadStatus.ERROR;

            console.log(`Error with torrent ${this.url}`, e);
        }

        await this.save();
    }

    private async downloadMagnet() {
        const torrentClient = await getTorrentClient(process.env.TORRENT_CLIENT_PORT || "");

        try {
            await torrentClient.addMagnet(this.url);

            this.status = DownloadStatus.FINISHED;
        } catch (e) {
            this.errorMessage = String(e);
            this.status = DownloadStatus.ERROR;

            console.log(`Error with magnet ${this.url}`, e);
        }

        await this.save();
    }
}