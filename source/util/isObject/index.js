/**
 * Determines if the given value is an object.
 * @signature isObject :: a -> Boolean
 * @func
 * @example
 * isObject({ a: 'b' })  // true
 * isObject([1, 2, 3])  // false
 */
const isObject = value => value != null && !Array.isArray(value) && typeof value === 'object';

export default isObject;
