import curry from './../curry';
import isArray from './../util/isArray';

/**
 * Returns every element that exists in either of the two arrays once.
 * @func
 * @signature union :: [a] -> [b] -> [c]
 * @arg {Array} a
 * @arg {Array} b
 * @example
 * union([ 1, 2, 3 ], [ 4, 3, 2 ]);
 * // [1, 2, 3, 4]
 */
export default curry((a, b) => Array.from(new Set([ ...isArray(a) ? a : [], ...isArray(b) ? b : [] ])));
