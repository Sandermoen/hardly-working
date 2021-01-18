const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const unknownEndpoint = require('./middleware/unknownEndpoint');
const errorHandler = require('./middleware/errorHandler');
const apiRouter = require('./routes/index');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', apiRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
