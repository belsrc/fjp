const isFunction = require('./util/isFunction');
const isArray = require('./util/isArray');

// Returns all of the distinct values of an array.
// If a function is provided, the array is mapped using the function first.
//
// distinct([ 1, 2, 2, 3, 4, 4, 5 ]);
// >> [ 1, 2, 3, 4, 5 ]
//
// distinct([{num: 1}, {num: 2}, {num: 2}, {num: 3}, {num: 4}, {num: 4}, {num: 5}], x => x.num);
// >> [ 1, 2, 3, 4, 5 ]
//
module.exports = (arr, func) =>
  isArray(arr) ? isFunction(func) ? [...new Set(arr.map(func))] : [...new Set(arr)] : [];
