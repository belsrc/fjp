import curry from './../curry';
import isArray from './../util/isArray';
import clone from './../util/clone';

/**
 * Adds the value to the start of the array.
 * @func
 * @signature unshift :: a -> [b] -> [c]
 * @arg {Mixed} val
 * @arg {Array} arr
 * @example
 * unshift(0, [ 1, 2, 3, 4 ])
 * // [0, 1, 2, 3, 4]
 */
export default curry((val, arr) => isArray(arr) ? [ val, ...clone(arr) ] : [val]);
