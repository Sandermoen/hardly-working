const info = (...params) => {
  process.env.NODE_ENV !== 'test' && console.log(params.join(' '));
};

const error = (...params) => {
  process.env.NODE_ENV !== 'test' && console.error(params.join(' '));
};

module.exports = {
  info,
  error,
};
