import 'babel-core/register';
import isObject from './index';

const data = {
  foo: 'bar',
  bench: 'mark',
  functional: 'programming',
};

module.exports = {
  name: 'isObject',
  tests: {
    ['val & typeof & constructor (no class)']() {
      return data && typeof data === 'object' && data.constructor === Object;
    },
    ['val & constructor (no class)']() {
      return data && data.constructor === Object;
    },
    ['val & typeof (no class)']() {
      return data && typeof value === 'object'; // Auto fails since it picks up other types
    },
    ['prototype.toString (rambda)']() {
      return Object.prototype.toString.call(data) === '[object Object]';
    },
    ['obj === Object (no class)']() {
      return data === Object(data); // Auto fails since it picks up other types
    },
    ['instanceof & constructor (no class)']() {
      return data instanceof Object && data.constructor === Object;
    },
    ['lodash (includes array & func)']() {
      const type = typeof data;

      return data != null && (type === 'object' || type === 'function');
    },
    ['fjp.isObject']() {
      return isObject(data);
    },
  },
};

/*
┌────────────────────────────────────────┬────────────────────┬────────────────────┐
│ isObject                               │ Hertz              │ Margin of Error    │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ val & typeof & constructor (no class)  │ 861,778,373        │ 0.19%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ val & constructor (no class)           │ 863,181,655        │ 0.19%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ val & typeof (no class)                │ 135,546,796        │ 0.30%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString (rambda)            │ 187,472,138        │ 0.34%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ obj === Object (no class)              │ 143,007,606        │ 0.30%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ instanceof & constructor (no class)    │ 862,365,786        │ 0.14%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ lodash (includes array & func)         │ 863,629,474        │ 0.12%              │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ isObject                               │ 862,942,577        │ 0.14%              │
└────────────────────────────────────────┴────────────────────┴────────────────────┘
 */
