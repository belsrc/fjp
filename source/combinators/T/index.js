import curry from './../../curry';

/**
 * Calls the given function with the given value. (Reverse order of apply)
 * @signature T :: a -> (a -> b) -> b
 * @func
 * @aka thrush, applyTo
 */
const T = curry((x, f) => f(x));

export default T;
