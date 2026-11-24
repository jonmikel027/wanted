import { Router } from "express";
import {
    getAllPosters,
    getPosterById,
    postPoster,
    editPoster
} from "../controllers/poster.controller.js";

const posterRouter = Router();

posterRouter.get("/", getAllPosters);
posterRouter.get("/:posterId", getPosterById);
posterRouter.post("/", postPoster);
posterRouter.patch("/:posterId", editPoster);

export { posterRouter };