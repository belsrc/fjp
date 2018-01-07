// Selects the key-value pairs corresponding to the given keys from an object.
//
// select({ a: 1, b: '2', c: { d: 3 } }, ['a', 'c.d']);
// >> { a: 1, d: 3 }
// 
const select = (obj, arr) =>
  arr.reduce((acc, curr) => {
    const split = curr.split('.');

    return split.length > 1 ?
      // This will return the full path => 'a.b' == a: { b: val }
      // (acc[split[0]] = select(obj[split[0]], [split.slice(1).join('.')]), acc) :

      // This will return just the nested value => 'a.b' == b: val
      acc[split[0]] = select(obj[split[0]], [split.slice(1).join('.')]) :

      // Non nested value
      (curr in obj && (acc[curr] = obj[curr]), acc);
  }, {});

module.exports = select;
