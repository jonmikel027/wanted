import { PosterModel } from "../models/poster.model.js";

async function listAllPosters() {

    const allPosters = await PosterModel.find();
    return allPosters;
}

export { listAllPosters };