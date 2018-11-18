import isArray from './../util/isArray';
import reduce from './../reduce';

/**
 * Returns the sum of two or more numbers or an array of numbers.
 * @func
 * @signature sumN :: ([Number], [Number], ...[n]) -> Number
 * @arg {Number|Array} ...a
 * @example
 * sumN([1, 2], [3, 4], [5])
 * // 15
 */
export default (...nums) => isArray(nums) ? reduce(0, (acc, val) => acc + Number(val), [].concat(...nums)) : 0;
