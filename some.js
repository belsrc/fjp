const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');

module.exports = some = (func, arr) =>
  return isArray(arr) && isFunction(func) ?
    arr.some(func) :
    false;
