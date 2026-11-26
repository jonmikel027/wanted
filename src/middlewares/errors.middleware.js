function errorHandler(error, req, res, next) {
    console.error(error);

    if (res.headersSent) {
        return next(error);
    }

    if (error.name === "ValidationError") {
        const errorDetails = {};

        for (const fields in error.errors) {
            errorDetails[fields] = error.errors[fields].message;
        }

        res.status(400).json({ error: "Los datos enviados no son válidos.", errorDetails });
        return;
    }

    if (error.type === "entity.parse.failed") {
        res.status(400).json({ error: "El cuerpo de la petición contiene JSON mal escrito." });
        return;
    }

    if (error.status === 400 || error.status === 401 || error.status === 404) {
        res.status(error.status).json({ error: error.message });
        return;
    }

    res.status(500).json({ error: "error 500. Error interno del servidor." });
}

export { errorHandler };