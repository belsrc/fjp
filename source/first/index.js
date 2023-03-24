/**
 * Get the first n elements of the given array.
 * @func
 * @signature first :: [a] -> b -> [a]
 * @arg {Array} arr
 * @arg {Number} n
 * @example
 * first([1, 2, 3, 4, 5]) // [1]
 * first([1, 2, 3, 4, 5], 3) // [1, 2, 3]
 */
const first = ([ head, ...tail ], n = 1) => head !== undefined && n ? [ head, ...first(tail, n - 1) ] : [];

export default first;