/**
 * Determines if the given value is an object.
 * @func
 * @signature isObject :: a -> Boolean
 * @example
 * isObject({ a: 'b' })  // true
 * isObject([1, 2, 3])  // false
 */
const isObject = value => value != null && !Array.isArray(value) && typeof value === 'object';

export default isObject;
