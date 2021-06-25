const express = require('express');
const cors = require('cors');
const server = express();

const corsOptions = {
    origin: true
}

const authRouter = require('./auth/auth-router');
const articlesRouter = require('./articles/articles-router');
const categoriesRouter = require('./categories/categories-router');

server.use(cors(corsOptions));
server.use(express.json());

server.use(authRouter);
server.use(articlesRouter);
server.use(categoriesRouter)

module.exports = server;