import 'babel-core/register';
import isFunction from './index';

function fn() {}

module.exports = {
  name: 'isFunction',
  tests: {
    ['typeof *']() {
      return typeof fn === 'function';
    },
    ['constructor']() {
      return fn.constructor === Function;
    },
    ['constructor 2']() {
      return fn.constructor === Function.constructor;
    },
    ['instanceof']() {
      return fn instanceof Function;
    },
    ['prototype.toString']() {
      return Object.prototype.toString.call(fn) === '[object Function]';
    },
    ['isFunction *']() {
      return isFunction(fn);
    },
  },
};

/*
┌───────────────────────────────────┬────────────────────┬────────────────────┐
│ isFunction                        │ Hertz              │ Margin of Error    │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ typeof *                          │ 859,943,546        │ 0.15%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ constructor                       │ 860,952,357        │ 0.14%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ constructor 2                     │ 860,696,726        │ 0.13%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ instanceof                        │ 193,947,470        │ 0.26%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString                │ 160,096,781        │ 0.23%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ isFunction *                      │ 859,792,157        │ 0.14%              │
└───────────────────────────────────┴────────────────────┴────────────────────┘
  Fastest is constructor,constructor 2,typeof *
 */
