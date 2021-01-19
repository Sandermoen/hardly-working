const jwt = require('jsonwebtoken');

const config = require('../utils/config');

module.exports.generateRefreshToken = () => {
  const refreshToken = jwt.sign({}, config.JWT_SECRET, {
    expiresIn: config.REFRESH_TOKEN_EXPIRY,
  });

  return refreshToken;
};

module.exports.generateAccessToken = (user) => {
  const accessToken = jwt.sign(user.toJSON(), config.JWT_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRY,
  });

  return accessToken;
};
