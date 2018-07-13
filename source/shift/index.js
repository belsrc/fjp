import isArray from './../util/isArray';
import clone from './../util/clone';

// May be slightly unconventional but given you can only return one value
// which of the two things that pop does is more important?
// Removing the item from the array or returning that item
// I choose removing the item

// shift([ 1, 2, 3, 4, 5 ]);
// >> [ 2, 3, 4, 5 ]
//
// shift([1]);
// >> []
//
// shift();
// >> []
//
export default arr => !isArray(arr) || !arr.length ? [] : clone(arr).slice(1);
