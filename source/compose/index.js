/**
 * Performs right-to-left function composition.
 * The first (rightmost) function can accept one or more arguments; the remaining functions must be unary.
 * @func
 * @signature compose :: [(m -> n), ..., (b -> c), (a -> b)] -> a -> n
 * @arg {Function} ...fns
 * @example
 * const addOne = x => x + 1;
 * const timesTen = x => x * 10;
 * const addOneTimesTen = compose(timesTen, addOne);
 * const result = addOneTimesTen(9);
 * // 100
 */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export default compose;
