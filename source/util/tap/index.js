/* eslint-disable fp-jxl/no-unused-expression */
import curry from '../../curry';

/**
 * Calls the given function with the given value and returns the value.
 * @signature tap :: (a -> b) -> a -> a
 * @func
 * @example
 * tap(console.log, 'foobar') // foobar
 */
const tap = curry((x, y) => {
  x(y);
  return y;
});

export default tap;
