"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("./post");
exports.filmsRouter = express_1.Router();
exports.filmsRouter.post("/", post_1.postFilms);
//# sourceMappingURL=index.js.map