import mongoose from "mongoose";

function validatePosterId(req, res, next) {
    const posterId = req.params.posterId;

    if (!mongoose.isObjectIdOrHexString(posterId)) {
        const error = new Error("ID de cartel no válido.");
        error.status = 400;
        return next(error);
    }

    next();
}

export { validatePosterId };