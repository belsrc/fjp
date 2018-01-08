const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');
const clone = require('./util/clone');

module.exports = (func, arr) => {
  if(!isFunction(func)) {
    return isArray(arr) ? clone(arr) : [];
  }

  return isArray(arr) ? clone(arr).sort(func) : [];
};
