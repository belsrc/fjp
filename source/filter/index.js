import curry from './../curry';
import isFunction from './../_util/isFunction';
import isArray from './../_util/isArray';
import clone from './../_util/clone';

export default curry((func, arr) =>
  !isFunction(func) ?
    isArray(arr) ? clone(arr) : [] :
    isArray(arr) ? clone(arr.filter(func)) : []);
