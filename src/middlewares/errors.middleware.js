function errorHandler(error, req, res, next) {
    console.log(error);

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

    res.status(500).json({ error: "error 500. Error interno del servidor." });
}

export { errorHandler };