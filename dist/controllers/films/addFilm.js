"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Film_1 = require("../../models/Film");
function addFilm(filmName) {
    const film = new Film_1.Film();
    film.name = filmName;
    return film.save();
}
exports.addFilm = addFilm;
//# sourceMappingURL=addFilm.js.map