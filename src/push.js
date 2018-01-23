import isArray from './util/isArray';
import clone from './util/clone';

// push(5, [ 1, 2, 3, 4 ]);
// >> [ 1, 2, 3, 4, 5 ]
//
// push(5)
// >> [5]
//
export default (val, arr) => isArray(arr) ? [ ...clone(arr), val ] : [val];
