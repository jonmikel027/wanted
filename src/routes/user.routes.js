import { Router } from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/requireAdmin.middleware.js";
import { validateUserId } from "../middlewares/validateUserId.middleware.js";
import { deactivateUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.patch("/:userId/deactivate",
    authenticateUser,
    requireAdmin,
    validateUserId,
    deactivateUser);

export { userRouter };
