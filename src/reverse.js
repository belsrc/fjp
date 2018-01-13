const isArray = require('./util/isArray');
const clone = require('./util/clone');

module.exports = arr => isArray(arr) ? clone(arr).reverse() : [];
