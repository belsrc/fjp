import curry from './../curry';
import isArray from './../util/isArray';

// Returns a list of elements that exist in both arrays.
//
// intersection([ 1, 2, 3 ], [ 4, 3, 2 ]);
// >> [ 2,3 ]
//
export default curry((a, b) => {
  const s = isArray(b) ? new Set(b) : new Set();

  return isArray(a) ? a.filter(x => s.has(x)) : [...s];
});
