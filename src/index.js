const config = require('./utils/config');
const logger = require('./utils/logger');
const app = require('./app');

app.listen(config.PORT, () => {
  logger.info(`Backend listening on port ${config.PORT}`);
});
