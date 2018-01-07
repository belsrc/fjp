const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');
const clone = require('./util/clone');

module.exports = map = (func, arr) => {
  if(!isFunction(func)) {
    return isArray(arr) ? clone(arr) : [];
  }

  return isArray(arr) ?
    arr.map(func) :
    [];
};
