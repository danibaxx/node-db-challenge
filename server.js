const express = require('express');

const server = express();

server.use(express.json());
// server.use('/api/projects', ProjectsRouter);

module.exports = server;