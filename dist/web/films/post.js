"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addFilm_1 = require("../../controllers/films/addFilm");
async function postFilms(req, res) {
    try {
        const newFilm = await addFilm_1.addFilm(req.body.name);
        res.json(newFilm);
    }
    catch (e) {
        console.log(e);
    }
}
exports.postFilms = postFilms;
//# sourceMappingURL=post.js.map