import curry from './curry';
import isFunction from './util/isFunction';
import isArray from './util/isArray';
import map from './map';
import clone from './util/clone';

// Returns all of the distinct values of an array.
// If a function is provided, the array is mapped using the function first.
//
// distinct([ 1, 2, 2, 3, 4, 4, 5 ]);
// >> [ 1, 2, 3, 4, 5 ]
//
// distinct([{num: 1}, {num: 2}, {num: 2}, {num: 3}, {num: 4}, {num: 4}, {num: 5}], x => x.num);
// >> [ 1, 2, 3, 4, 5 ]
//
export default curry((fn, arr) =>
  isArray(arr) ? isFunction(fn) ? [...new Set(map(fn, arr))] : [...new Set(clone(arr))] : []);
