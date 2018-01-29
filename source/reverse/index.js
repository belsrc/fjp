import isArray from './../_util/isArray';
import clone from './../_util/clone';

export default arr => isArray(arr) ? clone(arr).reverse() : [];
