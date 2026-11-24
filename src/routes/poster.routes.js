import { Router } from "express";
import { getAllPosters } from "../controllers/poster.controller.js";

const posterRouter = Router();

posterRouter.get("/", getAllPosters);

export { posterRouter };