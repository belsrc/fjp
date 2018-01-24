import isArray from './util/isArray';
import clone from './util/clone';

export default arr => isArray(arr) ? clone(arr).reverse() : [];
