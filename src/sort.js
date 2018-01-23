import isFunction from './util/isFunction';
import isArray from './util/isArray';
import clone from './util/clone';

export default (func, arr) =>
  !isFunction(func) ?
    isArray(arr) ? clone(arr) : [] :
    isArray(arr) ? clone(arr).sort(func) : [];
