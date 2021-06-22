const express = require('express');
const server = express();

const articlesRouter = require('./articles/articles-router');
const authRouter = require('./auth/auth-router');

server.use(express.json());

server.use(articlesRouter);
server.use(authRouter);

module.exports = server;