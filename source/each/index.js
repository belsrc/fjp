import curry from './../curry';

/**
 * Applies the given func to each element in the array.
 * @func
 * @signature each :: (a -> b) -> [c] -> undefined
 * @arg {Function} fn
 * @arg {Array} arr
 * @example
 * difference(log, [1, 2, 3])
 */
const each = curry((fn, arr) => arr.forEach(fn));

export default each;
