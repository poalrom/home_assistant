import { resolve } from "path";
import { createConnection } from "typeorm";

let connectionCreated = false;

export function connectToDb() {

    if (connectionCreated) {
        return Promise.resolve(true);
    }

    return createConnection({
        type: "mongodb",
        url: process.env.TYPEORM_URL,
        ssl: true,
        logging: process.env.TYPEORM_LOGGING === "true",
        synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
        entities: [resolve(__dirname, "../../", "models/*.js")],
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() => connectionCreated = true);
}
