import curry from './../curry';
import isFunction from './../util/isFunction';
import isArray from './../util/isArray';

/**
 * Filters the array using the given function.
 * @func
 * @signature filter :: (a -> Boolean) -> [a] -> [a]
 * @arg {Function} func
 * @arg {Array} arr
 * @example
 * filter(x => x > 5, [1, 2, 3, 5, 6, 7])
 * // [6, 7]
 */
const filter = curry((func, arr) => !isFunction(func) ? isArray(arr) ? arr : [] : isArray(arr) ? arr.filter(func) : []);

export default filter;
