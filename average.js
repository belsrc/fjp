const isArray = require('./util/isArray');
const sum = require('./sum');

// Returns the average of two or more numbers or an array of numbers.
//
// average([1, 2, 3]);
// >> 2
//
// average(1, 2, 3);
// >> 2
//
//average();
// >> 0
//
module.exports = average = (...nums) =>
  // nums != null && nums.length
  isArray(nums) && nums.length
    ? sum(...nums) / [].concat(...nums).length
    : 0;
