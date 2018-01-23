import curry from './curry';
import isFunction from './util/isFunction';
import isArray from './util/isArray';

export default curry((fn, arr) => isArray(arr) && isFunction(fn) ? arr.some(fn) : false);
