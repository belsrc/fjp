const isArray = require('./util/isArray');

// Returns the difference between two arrays.
//
// difference([ 1, 2, 3 ], [ 1, 2, 4 ]);
// >> [3]
//
// difference([], [1, 2, 4]);
// >> [ 1, 2, 4 ]
//
// difference(null, [1, 2, 4]);
// >> [ 1, 2, 4 ]
//
// difference([1, 2, 3], []);
// >> [ 1, 2, 3 ]
//
// difference([1, 2, 3], null);
// >> [ 1, 2, 3 ]
//
// difference(null, null)
// >> []
//
module.exports = difference = (a, b) => {
  const s = isArray(b) ? new Set(b) : new Set();
  return isArray(a) ? a.filter(x => !s.has(x)) : [...s];
};
