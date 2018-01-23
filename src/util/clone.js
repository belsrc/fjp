import isObject from './isObject';
import isArray from './isArray';

function clone(val) {
  return isArray(val) ?
    val.map(i => clone(i)) :
    isObject(val) ? Object.keys(val).reduce((acc, curr) => (acc[curr] = clone(val[curr]), acc), {}) : val; // eslint-disable-line no-return-assign, no-sequences
}

export default clone;
