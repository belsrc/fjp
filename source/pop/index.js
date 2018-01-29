import isArray from './../_util/isArray';
import clone from './../_util/clone';

// May be slightly unconventional but given you can only return one value
// which of the two things that pop does is more important?
// Removing the item from the array or returning that item
// I chose removing the item

// pop([ 1, 2, 3, 4, 5 ]);
// >> [ 1, 2, 3, 4 ]
//
// pop([1]);
// >> []
//
// pop();
// >> []
//
export default arr =>
  !isArray(arr) || !arr.length ? [] : clone(arr).slice(0, arr.length - 1);
