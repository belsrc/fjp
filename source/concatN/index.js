import reduce from './../reduce';

/**
 * Concatenates N Arrays together.
 * @signature concat :: [a] -> [b] -> ...[n] -> [m]
 * @func
 * @example
 * concatN([1, 2], [3, 4], [5, 6]) // [1, 2, 3, 4, 5, 6]
 */
const concatN = (...args) => reduce([], (acc, val) => [ ...acc, ...val ], args);

export default concatN;
