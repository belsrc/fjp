/**
 * Determines if the given value is undefined.
 * @arg {Mixed} x
 * @signature undef :: a -> Boolean
 * @func
 * @example
 * undef('foo bar')  // false
 * undef(undefined)  // true
 */
const undef = x => typeof x === 'undefined';

export default undef;
