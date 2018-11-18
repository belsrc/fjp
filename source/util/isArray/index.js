/**
 * Determines if the given value is an array.
 * @func
 * @signature isArray :: a -> Boolean
 * @arg {Array} arr
 * @example
 * isArray([1, 2, 3])  // true
 * isArray({ a: 'b' })  // false
 */
const isArray = value => Array.isArray(value);

export default isArray;
