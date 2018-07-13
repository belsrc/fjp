import curry from './../curry';
import isArray from './../util/isArray';
import clone from './../util/clone';

// TODO: also call subset
export default curry((start, end, arr) => isArray(arr) ? clone(arr).slice(start, end) : []);
