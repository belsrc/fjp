import isArray from './../util/isArray';
import clone from './../util/clone';
import curry from './../curry';

const subset = curry((start, end, arr) => isArray(arr) ? clone(arr).slice(start, end) : []);

export default subset;
