require('dotenv').config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_EXPIRY = '30d';
const ACCESS_TOKEN_EXPIRY = '5 minutes';

let MONGO_URI;

// Allow for varying env variables if tests are added
if (process.env.NODE_ENV === 'test') {
  MONGO_URI = process.env.TEST_MONGO_URI;
} else {
  MONGO_URI = process.env.MONGO_URI;
}

module.exports = {
  PORT,
  MONGO_URI,
  JWT_SECRET,
  REFRESH_TOKEN_EXPIRY,
  ACCESS_TOKEN_EXPIRY,
};
