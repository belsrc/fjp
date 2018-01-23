import isArray from './util/isArray';

// Returns the sum of two or more numbers or an array of numbers.
//
// sum([ 1, 2, 3, 4 ]);
// >> 10
//
// sum(1, 2, 3, 4);
// >> 10
//
export default (...nums) => isArray(nums) ? [].concat(...nums).reduce((acc, val) => acc + Number(val), 0) : 0;
