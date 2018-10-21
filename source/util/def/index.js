/**
 * Determines if the given value is defined.
 * @arg {Mixed} x
 * @signature def :: a -> Boolean
 * @func
 * @example
 * def('foo bar')  // true
 * def(undefined)  // false
 */
const def = x => typeof x !== 'undefined';

export default def;
