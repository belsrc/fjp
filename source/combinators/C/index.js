import curry from './../../curry';

// λfab.fba
// Cardinal
const C = curry((func, a, b) => func(b, a));

export default C;
