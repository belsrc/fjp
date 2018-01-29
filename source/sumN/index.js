import isArray from './../_util/isArray';
import reduce from './../reduce';

// Returns the sum of two or more numbers or an array of numbers.
//
// sum([ 1, 2, 3, 4 ]);
// >> 10
//
// sum(1, 2, 3, 4);
// >> 10
//
export default (...nums) =>
  isArray(nums) ?
    reduce(0, (acc, val) => acc + Number(val), [].concat(...nums)) :
    0;
