/**
 * Determines if the given value is a number.
 * @signature isNumber :: a -> Boolean
 * @func
 * @example
 * isNumber(42)  // true
 * isNumber(8e5)  // true
 * isNumber(0x2F)  // true
 * isNumber('foo bar')  // false
 */
const isNumber = n => typeof n === 'number' && !isNaN(n) && isFinite(n);

export default isNumber;
