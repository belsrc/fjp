const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');

module.exports = every = (func, arr) =>
  isArray(arr) && isFunction(func) ?
    arr.every(func) :
    false;
