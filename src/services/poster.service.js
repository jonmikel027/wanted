import { PosterModel } from "../models/poster.model.js";

async function listAllPosters() {

    const allPosters = await PosterModel.find();
    return allPosters;
}

async function findPosterById(posterId) {

    const foundPoster = await PosterModel.findById(posterId);
    return foundPoster;
}

export {
    listAllPosters,
    findPosterById
};