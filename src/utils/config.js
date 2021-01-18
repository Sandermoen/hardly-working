require('dotenv').config();

const PORT = process.env.PORT;
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
};
