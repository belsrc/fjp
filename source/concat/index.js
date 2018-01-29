import isArray from './../_util/isArray';
import isString from './../_util/isString';
import clone from './../_util/clone';
import curry from './../curry';

export default curry((a, b) =>
  isArray(a) && isArray(b) ?
    clone(a).concat(clone(b)) :
    isString(a) && isString(b) ? a + b : []);
