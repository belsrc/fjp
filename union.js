const isArray = require('./util/isArray');

// Returns every element that exists in any of the two arrays once.
//
// union([1, 2, 3], [4, 3, 2]);
// >> [1,2,3,4]
// 
module.exports = union = (a, b) =>
  Array.from(new Set([...(isArray(a) ? a : []), ...(isArray(b) ? b : [])]));
