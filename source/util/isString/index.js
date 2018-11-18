/**
 * Determines if the given value is a string.
 * @func
 * @signature isString :: a -> Boolean
 * @arg {String} a
 * @example
 * isString('foo bar')  // true
 * isString({ a: 'b' })  // false
 */
const isString = value => value != null && value.constructor === String;

export default isString;
