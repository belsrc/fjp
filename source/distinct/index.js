import isArray from './../util/isArray';

/**
 * Returns all of the distinct values of an array.
 * @func
 * @signature distinct :: [a] -> [b]
 * @arg {Array} arr
 * @example
 * distinct([ 1, 2, 2, 3, 4, 4, 5 ])
 * // [ 1, 2, 3, 4, 5 ]
 */
const distinct = arr => isArray(arr) ? [...new Set(arr)] : [];

export default distinct;
