import curry from './curry';
import isFunction from './util/isFunction';
import isArray from './util/isArray';
import clone from './util/clone';

export default curry((func, arr) =>
  !isFunction(func) ?
    isArray(arr) ? clone(arr) : [] :
    isArray(arr) ? clone(arr.map(func)) : []);
