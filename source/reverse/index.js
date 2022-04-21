import isArray from '../util/isArray';
import clone from '../util/clone';

const reverse = arr => isArray(arr) ? clone(arr).reverse() : [];

export default reverse;
