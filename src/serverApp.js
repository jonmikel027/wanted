import express from 'express';

const serverApp = express();

serverApp.get("/health", (req, res) => {
    res.json({ "status": "server ok" });
});

export {serverApp};