import express from 'express';
import { posterRouter } from './routes/poster.routes.js';

const serverApp = express();

serverApp.use(express.json());

serverApp.use("/posters", posterRouter);

serverApp.get("/health", (req, res) => {
    res.json({ "status": "server ok" });
});


export { serverApp };