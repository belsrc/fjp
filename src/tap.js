const curry = require('./curry');

const tap = curry((x, y) => {
  x(y);
  return y;
});

module.exports = tap;
