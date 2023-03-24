/**
 * @signature a -> b -> (a -> b -> c) -> c
 * @bird Vireo
 * @lamda λabf.fab
 * @func
 * @param {Mixed} a
 * @param {Mixed} b
 * @param {Function} f
 */
const V = a => b => f => f(a)(b);

export default V;
