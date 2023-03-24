import 'babel-core/register';

const LEN = 4000;
const testArr = [...Array(LEN).keys()];
const fn = x => x * 2;

const recurMap = (func, [ head, ...tail ]) => !head ? [] : [ func(head), ...recurMap(func, tail) ];

module.exports = {
  name: 'map',
  tests: {
    ['Array.map']() {
      return testArr.map(fn);
    },
    ['Recursive map']() {
      return recurMap(fn, testArr);
    },
  },
};
