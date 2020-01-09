"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const typeorm_1 = require("typeorm");
let connectionCreated = false;
function connectToDb() {
    if (connectionCreated) {
        return Promise.resolve(true);
    }
    return typeorm_1.createConnection({
        type: "mongodb",
        url: process.env.TYPEORM_URL,
        ssl: true,
        logging: process.env.TYPEORM_LOGGING === "true",
        synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
        entities: [path_1.resolve(__dirname, "../../", "models/*.js")],
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() => connectionCreated = true);
}
exports.connectToDb = connectToDb;
//# sourceMappingURL=connectToDb.js.map