import curry from './../curry';
import isFunction from './../util/isFunction';
import isArray from './../util/isArray';

/**
 * Determines if all element in an array satisfy the given test function
 * @signature every :: (a -> Bool) -> [a] -> Bool
 * @func
 * @aka all
 * @example
 * every(Boolean, [1, 2, 3, 4]) // true
 * every(Boolean, [1, 2, null, 4]) // false
 */
const every = curry((fn, arr) => isArray(arr) && isFunction(fn) ? arr.every(fn) : false);

export default every;
