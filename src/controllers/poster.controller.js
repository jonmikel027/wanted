import {
    listAllPosters,
    findPosterById,
    createPoster
} from "../services/poster.service.js";

async function getAllPosters(req, res) {

    const allPosters = await listAllPosters();

    res.json(allPosters);
}

async function getPosterById(req, res) {

    const poster = await findPosterById(req.params.posterId);

    if (!poster) {
        res.status(404).json({ error: "error 404. Poster no encontrado." });
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

export {
    getAllPosters,
    getPosterById,
    postPoster
};