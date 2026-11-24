import { Router } from "express";
import {
    getAllPosters,
    getPosterById
} from "../controllers/poster.controller.js";

const posterRouter = Router();

posterRouter.get("/", getAllPosters);
posterRouter.get("/:posterId",getPosterById);

export { posterRouter };