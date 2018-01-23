// Selects the key-value pairs corresponding to the given keys from an object.
//
// select({ a: 1, b: '2', c: { d: 3 } }, [ 'a', 'c.d' ]);
// >> { a: 1, d: 3 }
//
function select(obj, arr) {
  arr.reduce((acc, curr) => {
    const split = curr.split('.');

    // This will return the full path => 'a.b' == a: { b: val }
    // (acc[split[0]] = select(obj[split[0]], [split.slice(1).join('.')]), acc) :

    /* eslint-disable no-return-assign */
    // This will return just the nested value => 'a.b' == b: val
    return split.length > 1 ?
      acc[split[0]] = select(obj[split[0]], [split.slice(1).join('.')]) :
      (curr in obj && (acc[curr] = obj[curr]), acc);
  }, {});
  /* eslint-enable no-return-assign */
}

export default select;
