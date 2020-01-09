import { Entity, Column, BaseEntity, ObjectID, ObjectIdColumn } from "typeorm";
import { DownloadStatus } from "../types/DownloadStatus";

@Entity()
export class Film extends BaseEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    downloadStatus: DownloadStatus = DownloadStatus.EMPTY;
}