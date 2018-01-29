import clone from './../_util/clone';
import distinct from './../distinct';
import filter from './../filter';
import groupBy from './../groupBy';
import map from './../map';
import select from './../select';
import sort from './../sort';

export default arr => {
  let _array = arr || [];

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
    },
  };
};
