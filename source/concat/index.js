import isArray from './../util/isArray';
import isString from './../util/isString';
import curry from './../curry';

/**
 * Concatenates two String|Arrays together.
 * Returns empty array if value arent of the same type or not String|Array.
 * @signature concat :: a -> b -> c
 * @func
 * @example
 * concat('foo', 'bar') // foobar
 * concat([1, 2], [3, 4]) // [1, 2, 3, 4]
 */
const concat = curry((a, b) =>
  isArray(a) && isArray(b) ?
    a.concat(b) :
    isString(a) && isString(b) ?
      `${ a }${ b }` :
      []);

export default concat;
