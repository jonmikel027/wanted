import { Router } from "express";
import { postUser, postLogin } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", postUser);
authRouter.post("/login", postLogin);

export {
    authRouter
}