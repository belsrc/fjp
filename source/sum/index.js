import isArray from '../util/isArray';
import curry from '../curry';
import reduce from '../reduce';

export default curry(arr => isArray(arr) ? reduce(0, (acc, val) => acc + Number(val), arr) : 0);
