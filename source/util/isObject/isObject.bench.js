import '@babel/register';
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
    ['prototype.toString (rambda)']() {
      return Object.prototype.toString.call(data) === '[object Object]';
    },
    ['instanceof & constructor (no class)']() {
      return data instanceof Object && data.constructor === Object;
    },
    ['lodash (includes array & func)']() {
      const type = typeof data;

      return data != null && (type === 'object' || type === 'function');
    },
    ['fjp.isObject']() {
      // isObject(data);
      return data != null && !Array.isArray(data) && typeof data === 'object';
    },
  },
};

/*
┌────────────────────────────────────────┬────────────────────┬────────────────────┐
│ isObject                                   │ Hertz                │ Count                │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ val & typeof & constructor (no class)      │ 1,019,293,582        │ 51,708,554           │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ val & constructor (no class)               │ 1,016,279,325        │ 52,039,242           │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ prototype.toString (rambda)                │ 115,277,008          │ 10,372,418           │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ instanceof & constructor (no class)        │ 722,372,920          │ 51,891,449           │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ lodash (includes array & func)             │ 1,009,107,326        │ 51,418,166           │
├────────────────────────────────────────┼────────────────────┼────────────────────┤
│ fjp.isObject                               │ 195,990,243          │ 50,603,911           │
└────────────────────────────────────────┴────────────────────┴────────────────────┘
 */
