import isObject from './isObject';
import isArray from './isArray';

/* eslint-disable no-return-assign, no-sequences */
function clone(val) {
  return isArray(val) ?
    val.map(i => clone(i)) :
    isObject(val) ?
      Object.keys(val).reduce(
        (acc, curr) => (acc[curr] = clone(val[curr]), acc),
        {}
      ) :
      val;
}
/* eslint-enable no-return-assign, no-sequences */

export default clone;
