import curry from './../curry';
import isFunction from './../_util/isFunction';
import isArray from './../_util/isArray';

export default curry((fn, arr) => isArray(arr) && isFunction(fn) ? arr.every(fn) : false);
