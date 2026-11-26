function requireAdmin(req, res, next) {

    if (!req.user) {
        const error = new Error("Inicia sesión antes de continuar.");
        error.status = 401;
        return next(error);
    }

    if (req.user.role !== "admin") {
        const error = new Error("Esta acción está reservada al administrador.");
        error.status = 403;
        return next(error);
    }

    next();
}

export { requireAdmin };