import 'babel-core/register';
import isArray from './index';

const data = [ 1, 2, 3, 4, 5 ];

module.exports = {
  name: 'isArray',
  tests: {
    ['prototype.toString']() {
      return Object.prototype.toString.apply(data) === '[object Array]';
    },
    ['Array.isArray(x) *']() {
      return Array.isArray(data);
    },
    ['val & constructor']() {
      return data && data.constructor === Array;
    },
    ['fjp.isArray(x) *']() {
      return isArray(data);
    },
  },
};

/*
┌───────────────────────────────────┬────────────────────┬────────────────────┐
│ isArray                           │ Hertz              │ Margin of Error    │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString                │ 167,968,125        │ 0.45%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ Array.isArray(x)                  │ 860,344,505        │ 0.14%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ val & constructor                 │ 860,951,290        │ 0.15%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ fjp.isArray(x)                    │ 859,235,003        │ 0.13%              │
└───────────────────────────────────┴────────────────────┴────────────────────┘
*/
