import curry from '../../curry';

/**
 * Calls the given function with the given value.
 * @signature A :: (a -> b) -> a -> b
 * @func
 * @aka apply
 */
const A = curry((f, x) => f(x));

export default A;
