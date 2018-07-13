import curry from './../curry';

/**
 * Finds the first element that satisfies the given test func.
 * @signature find :: (a -> Boolean) -> [a] -> a
 * @func
 * @example
 * find(x => x.score === 5, [{score: 1}, {score: 2}, {score: 5}, {score: 6}, {score: 7}]) // {score: 5}
 */
const find = curry((fn, x) => x.find(fn));

export default find;
