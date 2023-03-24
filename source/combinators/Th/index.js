import curry from './../../curry';

/**
 * Calls the given function with the given value. (Reverse order of apply)
 * @signature Th :: a -> (a -> b) -> b
 * @func
 * @aka thrush, applyTo
 * @lamda λaf.fa
 * @bird Thrush
 */
const Th = curry((x, f) => f(x));

export default Th;
