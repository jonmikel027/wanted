import { PosterModel } from "../models/poster.model.js";

async function listAllPosters() {

    const allPosters = await PosterModel.find();
    return allPosters;
}

async function findPosterById(posterId) {

    const foundPoster = await PosterModel.findById(posterId);
    return foundPoster;
}

async function createPoster(posterData) {

    const newPoster = await PosterModel.create(posterData);
    return newPoster;
}

async function updatePosterById(posterId, posterData) {

    const updatedPoster = await PosterModel.findByIdAndUpdate(posterId,
        { $set: posterData },
        { new: true, runValidators: true }
    );

    return updatedPoster;
}

export {
    listAllPosters,
    findPosterById,
    createPoster,
    updatePosterById
};