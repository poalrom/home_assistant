import { Router } from "express";
import { postFilms } from "./post";

export const filmsRouter = Router();

filmsRouter.post("/", postFilms);