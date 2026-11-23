import express from "express";

const serverApp = express();
const defaultServerPORT = 3000;

serverApp.get("/health", (req, res) => {
    res.json({ "status": "server ok" });
});

serverApp.listen(defaultServerPORT, () => {
    console.log("Servidor escuchando en el puerto " + defaultServerPORT);
});