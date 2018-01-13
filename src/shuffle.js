// Randomizes the order of the values of an array, returning a new array.
// Uses the Fisher-Yates algoritm to reorder the elements of the array.
//
// shuffle([ 1, 2, 3 ]);
// >> [ 2, 3, 1 ]
//
module.exports = ([...arr]) => {
  let m = arr.length;

  while(m) {
    const i = Math.floor(Math.random() * m--);

    [ arr[m], arr[i] ] = [ arr[i], arr[m] ];
  }
  return arr;
};
