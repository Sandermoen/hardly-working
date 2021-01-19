const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    logger.error(err.stack);
    switch (err.name) {
      case 'CastError':
        return res.status(400).send({ error: 'malformatted id.' });
      case 'ValidationError':
        return res
          .status(400)
          .send({ error: err.errors ? err.errors : err.message });
      case 'TokenExpiredError':
        return res.status(401).send({ error: 'session expired.' });
    }
  }
  return next();
};

module.exports = errorHandler;
