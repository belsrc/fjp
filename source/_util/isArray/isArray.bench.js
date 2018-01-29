import 'babel-core/register';
import isArray from './index';

const data = [ 1, 2, 3, 4, 5];

module.exports = {
  name: 'clone',
  tests: {
    ['prototype.toString']() {
      return Object.prototype.toString.apply(data) === '[object Array]';
    },
    ['Array.isArray(x) *']() {
      return Array.isArray(data);
    },
    ['fjp.isArray(x) *']() {
      return isArray(data);
    },
  },
};
