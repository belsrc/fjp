import curry from '.curry';
import isArray from './util/isArray';
import sum from './sum';

// Returns the average of two or more numbers or an array of numbers.
//
// average([ 1, 2, 3 ]);
// >> 2
//
// average(1, 2, 3);
// >> 2
//
// average();
// >> 0
//
export default curry((...nums) => isArray(nums) && nums.length ? sum(...nums) / [].concat(...nums).length : 0);
