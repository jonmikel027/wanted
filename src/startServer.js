import "dotenv/config";
import { connectMongo } from './config/connectMongo.js';
import { serverApp } from "./serverApp.js";

await connectMongo();

const defaultServerPORT = 3000;
const serverPORT = Number(process.env.SERVER_PORT || defaultServerPORT);

serverApp.listen(serverPORT, () => {
    console.log("Servidor escuchando en el puerto " + serverPORT);
});