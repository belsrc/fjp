import curry from './../curry';

export default curry((fn, x) => x.find(fn));
