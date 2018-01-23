import isArray from './util/isArray';
import clone from './util/clone';

export default (arr, start, end) => isArray(arr) ? clone(arr).slice(start, end) : [];
