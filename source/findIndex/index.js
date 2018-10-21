import curry from './../curry';

/**
 * Finds the index of the first element that satisfies the given test func.
 * @signature find :: (a -> Boolean) -> [a] -> a
 * @func
 * @example
 * findIndex(x => x.score === 5, [{score: 1}, {score: 2}, {score: 5}, {score: 6}, {score: 7}]) // 2
 */
const findIndex = curry((fn, x) => x.findIndex(fn));

export default findIndex;
