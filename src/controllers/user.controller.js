import { deactivateUserById } from "../services/user.service.js";

async function deactivateUser(req, res, next) {

    const deactivatedUserId = req.params.userId;

    const deactivatedUser = await deactivateUserById(deactivatedUserId);

    if (!deactivatedUser) {
        const error = new Error("Usuario no encontrado.");
        error.status = 404;
        return next(error);
    }

    res.status(200).json({
        message: "Usuario desactivado.",
        user: {
            _id: deactivatedUser._id,
            name: deactivatedUser.name,
            badge: deactivatedUser.badge,
            isActive: deactivatedUser.isActive
        }
    });
}

export { deactivateUser };