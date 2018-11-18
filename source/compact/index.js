import isArray from './../util/isArray';

/**
 * Removes falsey values from an array.
 * @func
 * @signature compact :: [a] -> [a]
 * @arg {Array} arr
 * @example
 * compact([ 0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34 ]);
 * // [ 1, 2, 3, 'a', 's', 34 ]
 *
 * compact(null)
 * // []
 */
const compact = arr => isArray(arr) ? arr.filter(Boolean) : [];

export default compact;
