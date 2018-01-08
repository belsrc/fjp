const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');
const clone = require('./util/clone');

module.exports = (func, arr, init) => {
  if(!isFunction(func)) {
    return isArray(arr) ? clone(arr) : [];
  }

  return isArray(arr) ? arr.reduceRight(func, init) : [];
};
