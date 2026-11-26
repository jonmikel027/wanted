import jwt from "jsonwebtoken";

function authenticateUser(req, res, next) {

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

    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: [process.env.JWT_ALGORITHM]
        });

        req.user = {
            userId: tokenData.userId,
            role: tokenData.role
        }
    } catch (verificationError) {

        let errorMessage = "Token no válido.";

        if (verificationError.name === "TokerExpiredError") {
            errorMessage = "La sesión ha caducado. Inicia sesión de nuevo.";
        }

        const error = new Error(errorMessage);
        error.status = 401;
        return next(error);
    }

    next();
}

export { authenticateUser };