const isArray = require('./util/isArray');

// Counts the occurrences of a value in an array.
//
// occurrences(1, [ 1, 1, 2, 1, 2, 3 ]);
// >> 3
//
module.exports = (value, arr) => isArray(arr) ? arr.reduce((acc, val) => val === value ? acc + 1 : acc, 0) : 0;
