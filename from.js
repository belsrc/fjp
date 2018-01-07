const clone = require('./util/clone');
const distinct = require('./distinct');
const filter = require('./filter');
const groupBy = require('./groupBy');
const map = require('./map');
const select = require('./select');
const sort = require('./sort');

module.exports = chain = (arr) => {
  _array = arr || [];

  return {
    where(func) {
      _array = filter(func, _array);
      return this;
    },

    orderBy(func) {
      _array = sort(_array, func);
      return this;
    },

    groupBy(func) {
      return groupBy(func, _array);
    },

    distinct(func) {
      _array = distinct(_array, func);
      return this;
    },

    select(props) {
      _array = map(item => select(item, props), _array);
      return this;
    },

    value() {
      return clone(_array);
    }
  };
};
