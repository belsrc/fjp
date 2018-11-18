import curry from './../../curry';

/**
 * Calls the given function with the given value and returns the value.
 * @func
 * @signature tap :: (a -> b) -> a -> a
 * @arg {Function} fn
 * @arg {Mixed} a
 * @example
 * tap(console.log, 'foobar') // foobar
 */
const tap = curry((x, y) => {
  x(y);
  return y;
});

export default tap;
