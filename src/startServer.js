import express from 'express';
import "dotenv/config";

const serverApp = express();
const defaultServerPORT = 3000;
const serverPORT = Number(process.env.SERVER_PORT || defaultServerPORT);

serverApp.get("/health", (req, res) => {
    res.json({ "status": "server ok" });
});

serverApp.listen(serverPORT, () => {
    console.log("Servidor escuchando en el puerto " + serverPORT);
});