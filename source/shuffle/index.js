/* eslint-disable fp-jxl/no-let, fp-jxl/no-loops, fp-jxl/no-mutation  */
import clone from '../util/clone';

// Randomizes the order of the values of an array, returning a new array.
// Uses the Fisher-Yates algoritm to reorder the elements of the array.
//
// shuffle([ 1, 2, 3 ]);
// >> [ 2, 3, 1 ]
//
const shuffle = ([...arr]) => {
  const carr = clone(arr);

  let m = carr.length;

  while(m) {
    const i = Math.floor(Math.random() * m--);

    [ carr[m], carr[i] ] = [ carr[i], carr[m] ];
  }

  return carr;
};

export default shuffle;
