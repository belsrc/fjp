import curry from './../curry';

// Returns the standard deviation of an array of numbers.
//
// deviation([ 10, 2, 38, 23, 38, 23, 21 ]);
// >> 13.284434142114991 (sample)
//
// deviation([ 10, 2, 38, 23, 38, 23, 21 ], true);
// >> 12.29899614287479 (population)
//
const deviation = curry((usePopulation, arr) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;

  return Math.sqrt(arr
    .reduce((acc, val) => acc.concat(Math.pow(val - mean, 2)), [])
    .reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1)));
});

export default deviation;
