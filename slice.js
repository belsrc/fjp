const isArray = require('./util/isArray');
const clone = require('./util/clone');

module.exports = slice = (arr, start, end) =>
  isArray(arr) ?
    clone(arr).slice(start, end) :
    [];
