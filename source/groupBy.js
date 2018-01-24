import curry from './curry';
import isFunction from './util/isFunction';
import isArray from './util/isArray';

// Groups the elements of an array based on the given function.
//
// groupBy(Math.floor, [ 6.1, 4.2, 6.3 ]);
// >> { '4': [4.2], '6': [ 6.1, 6.3 ] }
//
// groupBy('length', [ 'one', 'two', 'three' ]);
// >> { '3': [ 'one', 'two' ], '5': ['three'] }
//
// groupBy(null, ['one', 'two', 'three']);
// >> {}
//
// groupBy(Math.floor, null);
// >> {}
//
export default curry((func, arr) =>
  func != null && isArray(arr) ?
    arr
      .map(isFunction(func) ? func : val => val[func])
      .reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
      }, {}) :
    {});
