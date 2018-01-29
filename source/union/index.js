import curry from './../curry';
import isArray from './../_util/isArray';

// Returns every element that exists in any of the two arrays once.
//
// union([ 1, 2, 3 ], [ 4, 3, 2 ]);
// >> [ 1, 2, 3, 4 ]
//
export default curry((a, b) =>
  Array.from(new Set([ ...isArray(a) ? a : [], ...isArray(b) ? b : [] ])));
