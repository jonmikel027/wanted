import {
    listAllPosters,
    findPosterById
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

export {
    getAllPosters,
    getPosterById
};