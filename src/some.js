const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');

module.exports = (func, arr) => isArray(arr) && isFunction(func) ? arr.some(func) : false;
