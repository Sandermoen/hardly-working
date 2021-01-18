const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    logger.error(err.message);
  }
  return next();
};

module.exports = errorHandler;
