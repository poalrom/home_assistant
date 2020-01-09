import App from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { filmsRouter } from "./films";
import { connectToDb } from "../modules/db/connectToDb";

const PORT = process.env.PORT || 3000;
const app = App();

app
    .use(cors({ origin: "*", }))
    .use(bodyParser.json())
    .use("/films", filmsRouter);

export function startWeb() {
    return connectToDb().then(() => {
        app.listen(PORT, () => {
            console.log(`App listen on port ${PORT}`);
        });
    });
}
