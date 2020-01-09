import { Request, Response } from "express";
import { addFilm } from "../../controllers/films/addFilm";

export async function postFilms(req: Request, res: Response) {
    try {
        const newFilm = await addFilm(req.body.name);

        res.json(newFilm);
    } catch (e) {
        console.log(e);
    }
}