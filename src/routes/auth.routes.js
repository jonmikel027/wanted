import { Router } from "express";
import { postUser } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", postUser);

export {
    authRouter
}