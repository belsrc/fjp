import curry from './../curry';
import isArray from './../_util/isArray';
import clone from './../_util/clone';

// unshift(0, [ 1, 2, 3, 4 ])
// >> [ 0, 1, 2, 3, 4 ]
//
// unshift(0)
// >> [0]
//
export default curry((val, arr) => isArray(arr) ? [ val, ...clone(arr) ] : [val]);
