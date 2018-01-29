import curry from './../curry';
import isFunction from './../_util/isFunction';
import isArray from './../_util/isArray';

// TODO: Bench against
// export default curry((fn, array) => array.reduce((acc, curr) => fn(curr) || acc, false));

export default curry((fn, arr) => isArray(arr) && isFunction(fn) ? arr.some(fn) : false);
