import isFunction from './../util/isFucntion'
import isArray from './../util/isArray';
import curry from './../curry';

export default curry((func, arr) =>
  isArray(arr) ? isFunction(func) ? [...new Set(arr.map(func))] : [...new Set(arr)] : []);
