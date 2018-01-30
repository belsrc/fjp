import 'babel-core/register';
import isObject from './index';

const data = { foo: 'bar', bench: 'mark', functional: 'programming' };


module.exports = {
  name: 'isObject',
  tests: {
    ['val & typeof & constructor']() {
      return data && typeof data === 'object' && data.constructor === Object;
    },
    ['val & constructor *']() {
      return data && data.constructor === Object;
    },
    ['val & typeof']() {
      return data && typeof value === 'object'; // Auto fails since it picks up other types
    },
    ['prototype.toString']() {
      return Object.prototype.toString.call(data) === '[object Object]';
    },
    ['obj === Object']() {
      return data === Object(data); // Auto fails since it picks up other types
    },
    ['instanceof & constructor']() {
      return data instanceof Object && data.constructor === Object;
    },
    ['isObject']() {
      return isObject(data);
    },
  },
};

/*
┌───────────────────────────────────┬────────────────────┬────────────────────┐
│ isObject                          │ Hertz              │ Margin of Error    │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ val & typeof & constructor        │ 857,718,438        │ 0.17%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ val & constructor                 │ 859,628,821        │ 0.14%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ val & typeof                      │ 132,781,332        │ 0.39%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString                │ 185,928,696        │ 0.41%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ obj === Object                    │ 143,103,430        │ 0.20%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ instanceof & constructor *        │ 860,960,541        │ 0.12%              │
├───────────────────────────────────┼────────────────────┼────────────────────┤
│ isObject *                        │ 860,040,121        │ 0.12%              │
└───────────────────────────────────┴────────────────────┴────────────────────┘
  Fastest is instanceof & constructor,isObject
 */
