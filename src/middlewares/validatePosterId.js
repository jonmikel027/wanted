import mongoose from "mongoose";

function validatePosterId(req, res, next) {
    const posterId = req.params.posterId;

    if (!mongoose.isObjectIdOrHexString(posterId)) {
        res.status(400).json({ error: "ID de cartel no válido." });
        return;
    }

    next();
}

export { validatePosterId };