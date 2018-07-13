import curry from './../curry';
import clone from './../util/clone';

/**
 * Sets the given property and value on the object. Returning a new object.
 * @signature associate :: String k -> {} -> v -> {k: v}
 * @func
 * @example
 * const obj = associate('c', { a: b }, d)  // { a: b, c: d }
 */
const associate = curry((prop, obj, val) => {
  const c = clone(obj);

  c[prop] = val;
  return c;
});

export default associate;
