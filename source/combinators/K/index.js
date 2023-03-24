import curry from './../../curry';

/**
 * Takes two values and returns the given first.
 * @signature K :: a -> b -> a
 * @func
 * @aka constant
 * @lambda λab.a
 * @bird Kestrel
 */
const K = curry((x, y) => x);

export default K;
