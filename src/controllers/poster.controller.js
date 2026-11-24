import {
    listAllPosters,
    findPosterById,
    createPoster,
    updatePosterById,
    deletePosterById
} from "../services/poster.service.js";

async function getAllPosters(req, res) {

    const allPosters = await listAllPosters();

    res.json(allPosters);
}

async function getPosterById(req, res, next) {

    const poster = await findPosterById(req.params.posterId);

    if (!poster) {
        const error = new Error("Cartel no encontrado.");
        error.status = 404;
        return next(error);
    }

    res.json(poster);
}

async function postPoster(req, res) {

    const { wantedPerson, photoUrl, info, reward, status, openTipLine } = req.body;

    const newPoster = await createPoster({
        wantedPerson,
        photoUrl,
        info,
        reward,
        status,
        openTipLine,
        createdBy: "507f1f77bcf86cd799439011" // Provisional hasta tener autenticación
    });

    res.status(201).json(newPoster);
}

async function editPoster(req, res, next) {

    const editedPosterId = req.params.posterId;

    const editableFields = ["wantedPerson", "photoUrl", "info", "reward", "status", "openTipLine"];

    const posterNewData = {};

    for (const field of editableFields) {
        if (req.body[field] !== undefined) {
            posterNewData[field] = req.body[field];
        }
    }

    const editedPoster = await updatePosterById(editedPosterId, posterNewData);

    if (!editedPoster) {
        const error = new Error("Cartel no encontrado.");
        error.status = 404;
        return next(error);
    }

    res.status(200).json(editedPoster);
}

async function deletePoster(req, res, next) {

    const deletedPosterId = req.params.posterId;

    const deletedPoster = await deletePosterById(deletedPosterId);

    if (!deletedPoster) {
        const error = new Error("Cartel no encontrado.");
        error.status = 404;
        return next(error);
    }

    res.status(200).json({ mensaje: "200 Ok. Cartel eliminado." });
}

export {
    getAllPosters,
    getPosterById,
    postPoster,
    editPoster,
    deletePoster
};