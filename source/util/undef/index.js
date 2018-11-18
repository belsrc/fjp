/**
 * Determines if the given value is undefined.
 * @func
 * @signature undef :: a -> Boolean
 * @arg {Mixed} x
 * @example
 * undef('foo bar')  // false
 * undef(undefined)  // true
 */
const undef = x => typeof x === 'undefined';

export default undef;
