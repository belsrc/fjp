const isObject = require('./isObject');
const isArray = require('./isArray');

module.exports = clone = val =>
  isArray(val) ?
    val.map(i => clone(i)) :
    isObject(val) ?
      Object.keys(val).reduce((acc, curr) => (acc[curr] = clone(val[curr]), acc), {}) :
      val;
