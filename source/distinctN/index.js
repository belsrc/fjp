/**
 * Returns all of the distinct values of the given arrays.
 * @func
 * @signature distinctN :: ([a], [b], ...[n]) -> [m]
 * @arg {Array} ..arr
 * @example
 * distinctN([ 1, 2 ], [ 2, 3, 4 ], [ 4, 5 ])
 * // [ 1, 2, 3, 4, 5 ]
 */
const distinctN = (...args) => [...new Set(...args)];

export default distinctN;
