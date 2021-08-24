const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');
const routes = require('../../routes');
const { error404Handler, errorHandler } = require('../../middleware');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../..', 'build')));
app.use('/api/v1', routes);
app.use(error404Handler);
app.use(errorHandler);

module.exports = app;
