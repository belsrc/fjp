import curry from './../curry';

export default curry((fn, x) => x.findIndex(fn));
