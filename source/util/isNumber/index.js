/**
 * Determines if the given value is a number.
 * @func
 * @signature isNumber :: a -> Boolean
 * @arg {Number} n
 * @example
 * isNumber(42)  // true
 * isNumber(8e5)  // true
 * isNumber(0x2F)  // true
 * isNumber('foo bar')  // false
 */
const isNumber = n => typeof n === 'number' && !isNaN(n) && isFinite(n);

export default isNumber;
