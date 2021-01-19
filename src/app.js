const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const config = require('./utils/config');
const logger = require('./utils/logger');

const unknownEndpoint = require('./middleware/unknownEndpoint');
const errorHandler = require('./middleware/errorHandler');
const apiRouter = require('./routes/index');

(async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    logger.info('Connected to database');
  } catch (err) {
    logger.error(`Could not connect to database: ${err}`);
  }
})();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', apiRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
