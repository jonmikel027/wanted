import express from 'express';
import { posterRouter } from './routes/poster.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { errorHandler } from './middlewares/errors.middleware.js';

const serverApp = express();

serverApp.use(express.json());

serverApp.use("/posters", posterRouter);
serverApp.use("/auth", authRouter);

serverApp.get("/health", (req, res) => {
    res.json({ "status": "server ok" });
});

serverApp.use(errorHandler);


export { serverApp };