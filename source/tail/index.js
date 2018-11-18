/**
 * Get the remaining elements of the array minus the head, or first, element.
 * @func
 * @signature tail :: [a] -> [a]
 * @arg {Array} arr
 * @example
 * tail([1, 2, 3, 4, 5])
 * // [2, 3, 4, 5]
 */
const tail = ([ x, ...y ]) => y; // eslint-disable-line no-unused-vars

export default tail;
