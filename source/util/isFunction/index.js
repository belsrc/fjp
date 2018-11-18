/**
 * Determines if the given value is a function.
 * @func
 * @signature isFunction :: a -> Boolean
 * @arg {Function} fn
 * @example
 * isFunction(() => {})  // true
 * isFunction([1, 2, 3])  // false
 */
const isFunction = value => typeof value === 'function';

export default isFunction;
