import { UserModel } from "../models/user.model.js";

async function findUserByBadge(badge) {

    const foundUser = await UserModel.findOne({ badge });
    return foundUser;
}

async function findUserById(userId) {
    const foundUser = await UserModel.findById(userId);
    return foundUser;
}

async function createUser(userData) {

    const newUser = await UserModel.create(userData);
    return newUser;
}

async function deactivateUserById(userId) {

    const deactivatedUser = await UserModel.findByIdAndUpdate(userId,
        { $set: { isActive: false } },
        { new: true, runValidators: true }
    );

    return deactivatedUser;
}

export {
    findUserByBadge,
    findUserById,
    createUser,
    deactivateUserById
};