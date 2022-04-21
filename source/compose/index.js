/**
 * Performs right-to-left function composition.
 * @signature compose :: [(m -> n), ..., (b -> c), (a -> b)] -> a -> n
 * @func
 * @example
 * const addOne = x => x + 1;
 * const timeTen = x => x * 10;
 * const addOneTimeTen = compose(timeTen, addOne);
 * const result = addOneTimeTen(9); // 100
 */
const compose = (...fns) =>
  fns.reduce((f, g) =>
    (...args) =>
      f(g(...args)));

export default compose;
