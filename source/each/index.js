import curry from './../curry';

export default curry((fn, arr) => arr.forEach(fn));
