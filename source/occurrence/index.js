import curry from './../curry';
import isArray from './../util/isArray';

/**
 * Counts the occurrences of a value in an array.
 * @func
 * @signature a -> [b] -> Number
 * @arg {Mixed} val
 * @arg {Array} arr
 * @example
 * occurrences(1, [1, 1, 2, 1, 2, 3]);
 * // 3
 */
export default curry((value, arr) => isArray(arr) ? arr.reduce((acc, val) => val === value ? acc + 1 : acc, 0) : 0);
