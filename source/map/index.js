import curry from './../curry';
import isFunction from './../util/isFunction';
import isArray from './../util/isArray';
import clone from './../util/clone';

/**
 * Applies the given func to each element in the array, returning a new array containing the results.
 * @func
 * @signature map :: (a -> b) -> [a] -> [b]
 * @arg {Function} fn
 * @arg {Array} arr
 * @example
 * map(x => x * 10, [1, 2, 3, 4, 5])
 * // [10, 20, 30, 40, 50]
 */
export default curry((func, arr) => !isFunction(func) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? clone(arr.map(func)) : []);
