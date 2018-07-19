/* eslint-disable array-bracket-newline, array-element-newline */
import reduce from './../reduce';

/**
 * Flattens single nested array.
 * @signature flatten :: [a] -> [a]
 * @func
 * @example
 * flatten([[ 1, 2 ], [ 3, 4 ]];); // [ 1, 2, 3, 4 ]
 * flatten(null) // []
 */
const flatten = reduce([], (acc, curr) => [ ...acc, ...curr ]);

export default flatten;
