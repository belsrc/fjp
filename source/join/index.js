import curry from './../curry';

/**
 * Joins the array into a string using the given separator.
 * @func
 * @signature join :: String -> [a] -> String
 * @arg {String} sep
 * @arg {Array} arr
 * @example
 * join(', ', [1, 2, 3, 4])
 * // "1, 2, 3, 4"
 */
export default curry((sep, arr) => arr.join(sep));
