import { UserModel } from "../models/user.model.js";

async function findUserByBadge(badge) {

    const foundUser = await UserModel.findOne({ badge });
    return foundUser;
}

async function createUser(userData) {

    const newUser = await UserModel.create(userData);
    return newUser;
}

export {
    findUserByBadge,
    createUser
};