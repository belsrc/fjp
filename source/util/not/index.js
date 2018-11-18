/**
 * Negates the given boolean-like value.
 * @func
 * @signature not :: Boolean -> Boolean
 * @arg {Boolean} a
 * @example
 * not(true); // false
 * not(false); // true
 * not(2); // false
 */
const not = x => !x;

export default not;
