import { Entity, Column, BaseEntity, ObjectID, ObjectIdColumn } from "typeorm";
import { DownloadStatus } from "../types/DownloadStatus";
import { Files } from "../modules/files/files";

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

    async download() {
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
}