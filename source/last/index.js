/**
 * Get the last n elements of the given array.
 * @func
 * @signature last :: ([a], b) -> [a]
 * @arg {Array} arr
 * @arg {Number} n
 * @example
 * last([1, 2, 3, 4, 5])
 * // [5]
 *
 * last([1, 2, 3, 4, 5], 3)
 * // [3, 4, 5]
 */
const last = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

export default last;