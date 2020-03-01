import { resolve } from "path";
import { createConnection } from "typeorm";
import { config } from "../../config";

let connectionCreated = false;

export function connectToDb() {

    if (connectionCreated) {
        return Promise.resolve(true);
    }

    return createConnection({
        type: "mongodb",
        url: config.dbUrl,
        ssl: true,
        logging: true,
        synchronize: true,
        entities: [resolve(__dirname, "../../", "models/*.js")],
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() => connectionCreated = true);
}
