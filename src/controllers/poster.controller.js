import {
    listAllPosters,
    findPosterById,
    createPoster,
    updatePosterById
} from "../services/poster.service.js";

async function getAllPosters(req, res) {

    const allPosters = await listAllPosters();

    res.json(allPosters);
}

async function getPosterById(req, res) {

    const poster = await findPosterById(req.params.posterId);

    if (!poster) {
        res.status(404).json({ error: "error 404. Cartel no encontrado." });
        return;
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

async function editPoster(req, res) {

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
        res.status(404).json({ error: "error 404. Cartel no encontrado." });
        return;
    }

    res.status(200).json(editedPoster);
}

export {
    getAllPosters,
    getPosterById,
    postPoster,
    editPoster
};