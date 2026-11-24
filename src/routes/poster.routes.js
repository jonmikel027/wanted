import { Router } from "express";
import { validatePosterId } from "../middlewares/validatePosterId.middleware.js";
import {
    getAllPosters,
    getPosterById,
    postPoster,
    editPoster,
    deletePoster
} from "../controllers/poster.controller.js";

const posterRouter = Router();

posterRouter.get("/", getAllPosters);
posterRouter.get("/:posterId", validatePosterId, getPosterById);
posterRouter.post("/", postPoster);
posterRouter.patch("/:posterId", validatePosterId, editPoster);
posterRouter.delete("/:posterId", validatePosterId, deletePoster);

export { posterRouter };