import curry from './curry';
import isArray from './util/isArray';

// Returns the difference between two arrays.
//
// difference([ 1, 2, 3 ], [ 1, 2, 4 ]);
// >> [3]
//
// difference([], [ 1, 2, 4 ]);
// >> [ 1, 2, 4 ]
//
// difference(null, [ 1, 2, 4 ]);
// >> [ 1, 2, 4 ]
//
// difference([ 1, 2, 3 ], []);
// >> [ 1, 2, 3 ]
//
// difference([ 1, 2, 3 ], null);
// >> [ 1, 2, 3 ]
//
// difference(null, null)
// >> []
//
export default curry((a, b) => {
  const s = isArray(b) && b.length ? new Set(b) : new Set();

  return isArray(a) && a.length ? a.filter(x => !s.has(x)) : [...s];
});
