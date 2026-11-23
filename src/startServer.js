import express from 'express';
import "dotenv/config";
import { connectMongo } from './config/connectMongo.js';

const serverApp = express();
const defaultServerPORT = 3000;
const serverPORT = Number(process.env.SERVER_PORT || defaultServerPORT);

serverApp.get("/health", (req, res) => {
    res.json({ "status": "server ok" });
});

await connectMongo();

serverApp.listen(serverPORT, () => {
    console.log("Servidor escuchando en el puerto " + serverPORT);
});