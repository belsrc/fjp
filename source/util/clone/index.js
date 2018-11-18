/**
 * Clones the given object.
 * @func
 * @signature clone :: Object -> Object
 * @arg {Object} x
 * @example
 * clone({a: 1, b: 2})
 * // {a: 1, b: 2}
 */
function clone(x) {
  let i;

  if(!x || typeof x !== 'object') {
    return x;
  }

  if(Array.isArray(x)) {
    const arr = [];

    for(i = 0; i < x.length; i += 1) {
      arr[i] = clone(x[i]);
    }

    return arr;
  }

  if(x instanceof Object && x.constructor === Object) {
    const obj = {};

    for(i in x) {
      if(x.hasOwnProperty(i)) {
        obj[i] = clone(x[i]);
      }
    }

    return obj;
  }

  return x;
}

export default clone;
