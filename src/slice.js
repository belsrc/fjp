import curry from './curry';
import isArray from './util/isArray';
import clone from './util/clone';

export default curry((start, end, arr) => isArray(arr) ? clone(arr).slice(start, end) : []);
