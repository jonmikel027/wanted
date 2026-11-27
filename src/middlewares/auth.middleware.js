import jwt from "jsonwebtoken";
import { findUserById } from "../services/user.service.js";

async function authenticateUser(req, res, next) {

    const requestAuthorization = req.headers.authorization;

    if (!requestAuthorization) {

        const error = new Error("Inicia sesión antes de continuar.");
        error.status = 401;
        return next(error);
    }

    const [authorizationType, token] = requestAuthorization.split(" ");

    if (authorizationType !== "Bearer" || !token) {

        const error = new Error("Formato de autorización no válido.");
        error.status = 401;
        return next(error);
    }

    let tokenData;

    try {
        tokenData = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: [process.env.JWT_ALGORITHM]
        });
    } catch (verificationError) {

        let errorMessage = "Token no válido.";

        if (verificationError.name === "TokenExpiredError") {
            errorMessage = "La sesión ha caducado. Inicia sesión de nuevo.";
        }

        const error = new Error(errorMessage);
        error.status = 401;
        return next(error);
    }

    const user = await findUserById(tokenData.userId);

    if (!user) {
        const error = new Error("La cuenta asociada al token ya no existe.");
        error.status = 401;
        return next(error);
    }

    if (user.isActive === false) {
        const error = new Error("La cuenta está desactivada.");
        error.status = 403;
        return next(error);
    }

    req.user = {
        userId: user._id.toString(),
        role: user.role
    }

    next();
}

export { authenticateUser };