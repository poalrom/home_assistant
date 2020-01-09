"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const films_1 = require("./films");
const connectToDb_1 = require("../modules/db/connectToDb");
const PORT = process.env.PORT || 3000;
const app = express_1.default();
app
    .use(cors_1.default({ origin: "*", }))
    .use(body_parser_1.default.json())
    .use("/films", films_1.filmsRouter);
function startWeb() {
    return connectToDb_1.connectToDb().then(() => {
        app.listen(PORT, () => {
            console.log(`App listen on port ${PORT}`);
        });
    });
}
exports.startWeb = startWeb;
//# sourceMappingURL=index.js.map