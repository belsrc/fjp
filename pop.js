const isArray = require('./util/isArray');
const clone = require('./util/clone');

// May be slightly unconventional but given you can only return one value
// which of the two things that pop does is more important?
// Removing the item from the array or returning that item
// I choose removing the item

// pop([ 1, 2, 3, 4, 5 ]);
// >> [ 1, 2, 3, 4 ]
//
// pop([1]);
// >> []
//
// pop();
// >> []
//
module.exports = pop = arr => {
  if(!isArray(arr) || !arr.length) {
    return [];
  }

  return clone(arr).slice(0, arr.length - 1);
}
