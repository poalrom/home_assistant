"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const DownloadStatus_1 = require("../types/DownloadStatus");
const files_1 = require("../modules/files/files");
let Torrent = class Torrent extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.status = DownloadStatus_1.DownloadStatus.EMPTY;
    }
    async download() {
        try {
            await files_1.Files.downloadFile(this.url, "torrent");
            this.status = DownloadStatus_1.DownloadStatus.FINISHED;
        }
        catch (e) {
            this.errorMessage = String(e);
            this.status = DownloadStatus_1.DownloadStatus.ERROR;
            console.log(`Error with torrent ${this.url}`, e);
        }
        await this.save();
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", typeorm_1.ObjectID)
], Torrent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Torrent.prototype, "url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Torrent.prototype, "errorMessage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Torrent.prototype, "status", void 0);
Torrent = __decorate([
    typeorm_1.Entity()
], Torrent);
exports.Torrent = Torrent;
//# sourceMappingURL=Torrent.js.map