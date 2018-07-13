/**
 * Determines if the given value is a string.
 * @signature isString :: a -> Boolean
 * @func
 * @example
 * isString('foo bar')  // true
 * isString({ a: 'b' })  // false
 */
const isString = value => value != null && value.constructor === String;

export default isString;
