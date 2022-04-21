import curry from '../curry';
import clone from '../util/clone';
import isFunction from '../util/isFunction';
import isArray from '../util/isArray';

/**
 * Filters the array using the given function.
 * @signature filter :: (a -> Boolean) -> [a] -> [a]
 * @func
 * @example
 * filter(x => x > 5, [1, 2, 3, 5, 6, 7]) // [6, 7]
 */
const filter = curry((func, arr) =>
  !isFunction(func) ? isArray(arr) ? clone(arr) : [] : isArray(arr) ? arr.filter(func) : []);

export default filter;
