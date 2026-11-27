import mongoose from "mongoose";

function validateUserId(req, res, next) {

    const userId = req.params.userId;

    if (!mongoose.isObjectIdOrHexString(userId)) {
        const error = new Error("ID de usuario no válido.");
        error.status = 400;
        return next(error);
    }

    next();
}

export { validateUserId };