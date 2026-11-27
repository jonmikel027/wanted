import { Router } from "express";
import { validatePosterId } from "../middlewares/validatePosterId.middleware.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
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
posterRouter.post("/", authenticateUser, postPoster);
posterRouter.patch("/:posterId", authenticateUser, validatePosterId, editPoster);
posterRouter.delete("/:posterId", authenticateUser, validatePosterId, deletePoster);

export { posterRouter };