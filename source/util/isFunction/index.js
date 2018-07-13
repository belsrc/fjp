/**
 * Determines if the given value is a function.
 * @signature isFunction :: a -> Boolean
 * @func
 * @example
 * isFunction(() => {})  // true
 * isFunction([1, 2, 3])  // false
 */
const isFunction = value => typeof value === 'function';

export default isFunction;
