import curry from './../curry';
import clone from './../util/clone';

/**
 * Sets the given property and value on the object. Returning a new object.
 * @func
 * @signature associate :: String -> Object -> a -> Object
 * @arg {String} prop
 * @arg {Object} obj
 * @arg {Mixed} val
 * @example
 * associate('c', { a: b }, d)
 * // { a: b, c: d }
 *
 * associate('c')({ a: b })(d)
 * // { a: b, c: d }
 */
const associate = curry((prop, obj, val) => {
  const c = clone(obj);

  c[prop] = val;
  return c;
});

export default associate;
