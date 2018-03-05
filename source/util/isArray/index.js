/**
 * Determines if the given value is an array.
 * @signature isArray :: a -> Boolean
 * @func
 * @example
 * isArray([1, 2, 3])  // true
 * isArray({ a: 'b' })  // false
 */
const isArray = value => Array.isArray(value);

export default isArray;
