import curry from './../../curry';

/**
 * Given two functions that take the same value, returns the first if the result is truthy, otherwise, the second.
 * @signature OR :: (a -> b) -> (a -> b) -> b
 * @func
 * @aka alternation
 */
const OR = curry((f, g) => x => f(x) || g(x));

export default OR;
