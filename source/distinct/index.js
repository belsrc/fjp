import isArray from './../util/isArray';

/**
 * Returns all of the distinct values of an array.
 * @signature distinct :: [a] -> [b]
 * @func
 * @example
 * distinct([ 1, 2, 2, 3, 4, 4, 5 ]) // [ 1, 2, 3, 4, 5 ]
 */
const distinct = arr => isArray(arr) ? [...new Set(arr)] : [];

export default distinct;
