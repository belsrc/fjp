import '@babel/register';
import isNumber from './index';

const data = 43534;

module.exports = {
  name: 'isNumber',
  tests: {
    ['typeof + toString - lodash (true for NaN and INFINITY)']() {
      return (
        typeof data === 'number' ||
        Object.prototype.toString.call(data) === '[object Number]'
      );
    },
    ['prototype.toString - underscore (true for NaN and INFINITY)']() {
      return Object.prototype.toString.call(data) === '[object Number]';
    },
    ['fjp.isNumber']() {
      return isNumber(data);
    },
  },
};

/*
┌────────────────────────────────────────┬────────────────────┬────────────────────┐
│ isNumber                               │ Hertz              │ Count              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ typeof + toString                      │ 863,887,686        │ 43,481,918         │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString                     │ 175,209,044        │ 8,895,326          │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ fjp.isNumber                           │ 861,673,401        │ 43,390,541         │
└────────────────────────────────────────┴────────────────────┴────────────────────┘
*/
