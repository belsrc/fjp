/**
 * Determines if the given value is defined.
 * @func
 * @signature def :: a -> Boolean
 * @arg {Mixed} x
 * @example
 * def('foo bar')  // true
 * def(undefined)  // false
 */
const def = x => typeof x !== 'undefined';

export default def;
