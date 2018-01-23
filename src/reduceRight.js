import curry from './curry';
import isFunction from './util/isFunction';
import isArray from './util/isArray';
import clone from './util/clone';

export default curry((init, fn, arr) =>
  !isFunction(fn) ?
    isArray(arr) ? clone(arr) : [] :
    isArray(arr) ? clone(arr.reduceRight(fn, init)) : []);
