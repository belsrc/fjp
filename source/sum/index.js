import isArray from './../util/isArray';
import curry from './../curry';
import reduce from './../reduce';

/**
 * Returns the sum of an arrays of numbers.
 * @func
 * @signature [Number] -> Number
 * @arg {Array} arr
 * @example
 * sum([1, 2, 3, 4])
 * // 10
 */
export default curry(arr => isArray(arr) ? reduce(0, (acc, val) => acc + Number(val), arr) : 0);
