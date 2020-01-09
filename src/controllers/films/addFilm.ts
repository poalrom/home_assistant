import { Film } from "../../models/Film";

export function addFilm(filmName: string) {
    const film = new Film();

    film.name = filmName;

    return film.save();
}