const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');
const clone = require('./util/clone');

module.exports = reverse = arr => {
  return isArray(arr) ?
    clone(arr).reverse() :
    [];
};
