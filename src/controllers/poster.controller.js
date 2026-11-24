import { listAllPosters } from "../services/poster.service.js";

async function getAllPosters(req, res) {

    const allPosters = await listAllPosters();

    res.json(allPosters);
}

export { getAllPosters };