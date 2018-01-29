import curry from './../curry';
import isArray from './../_util/isArray';

// Returns the symmetric difference between two arrays.
//
// symmetricDifference([ 1, 2, 3 ], [ 1, 2, 4 ]);
// >> [ 3, 4 ]
//
export default curry((a, b) => {
  const sA = isArray(a) ? new Set(a) : new Set();
  const sB = isArray(b) ? new Set(b) : new Set();

  return [ ...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x)) ];
});
