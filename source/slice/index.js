import curry from './../curry';
import isArray from './../_util/isArray';
import clone from './../_util/clone';

export default curry((start, end, arr) => isArray(arr) ? clone(arr).slice(start, end) : []);
