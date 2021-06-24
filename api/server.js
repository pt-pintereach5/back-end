const express = require('express');
const cors = require('cors');
const server = express();

const corsOptions = {
    origin: true
}

const articlesRouter = require('./articles/articles-router');
const authRouter = require('./auth/auth-router');

server.use(cors(corsOptions));
server.use(express.json());

server.use(articlesRouter);
server.use(authRouter);

module.exports = server;