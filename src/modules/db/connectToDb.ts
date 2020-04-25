import { resolve } from "path";
import { createConnection } from "typeorm";
import { config } from "../../config";

let connectionCreated = false;

export function connectToDb() {

    if (connectionCreated) {
        return Promise.resolve(true);
    }

    return createConnection({
        type: "mysql",
        host: config.db.host,
        port: config.db.port,
        database: config.db.name,
        username: config.db.user,
        password: config.db.password,
        logging: true,
        synchronize: true,
        entities: [resolve(__dirname, "../../", "models/*.js")],
    }).then(() => connectionCreated = true);
}
