const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/', (req, res) => {
  res.send('hello there!');
});

module.exports = apiRouter;
