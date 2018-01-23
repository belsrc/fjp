import isFunction from './util/isFunction';
import isArray from './util/isArray';

export default (func, arr) => isArray(arr) && isFunction(func) ? arr.every(func) : false;
