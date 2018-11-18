import isArray from './../util/isArray';
import sum from './../sum';

/**
 * Averages the given array values
 * @func
 * @signature average :: [Number] -> Number
 * @arg {Array} arr
 * @example
 * average([ 1, 2, 3 ]);
 * // 2
 *
 * average(1, 2, 3);
 * // 2
 *
 * average();
 * // 0
 */
const average = (...nums) => isArray(nums) && nums.length ? sum([...nums]) / [...nums].length : 0;

export default average;
