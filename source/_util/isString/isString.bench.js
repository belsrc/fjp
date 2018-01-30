import 'babel-core/register';
import isString from './index';

const data = 'foo bar';


module.exports = {
  name: 'isString',
  tests: {
    ['instanceof']() {
      return data instanceof String;
    },
    ['constructor *']() {
      return data.constructor === String;
    },
    ['prototype.toString']() {
      return Object.prototype.toString.call(data) === '[object String]';
    },
    ['isString *']() {
      return isString(data);
    },
  },
};

/*
┌───────────────────────────────────┬────────────────────┬────────────────────┐
│ isString                          │ Hertz              │ Margin of Error    │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ instanceof                        │ 861,953,917        │ 0.14%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ constructor *                     │ 860,763,071        │ 0.24%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString                │ 170,625,186        │ 0.74%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ isString *                        │ 861,848,934        │ 0.12%              │
└───────────────────────────────────┴────────────────────┴────────────────────┘
  Fastest is isString *,instanceof,constructor *
 */
