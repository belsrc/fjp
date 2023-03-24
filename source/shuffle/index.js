import clone from './../util/clone';

/**
 * Randomizes the order of the values of an array, returning a new array.
 * Uses the Fisher-Yates algoritm to reorder the elements of the array.
 * @func
 * @signature shuffle :: [a] -> [a]
 * @arg {Array} arr
 * @example
 * shuffle([ 1, 2, 3 ]);
 * // [2, 3, 1]
 */
export default ([...arr]) => {
  const carr = clone(arr);
  let m = carr.length;

  while(m) {
    const i = Math.floor(Math.random() * m--);

    [ carr[m], carr[i] ] = [ carr[i], carr[m] ];
  }

  return carr;
};
