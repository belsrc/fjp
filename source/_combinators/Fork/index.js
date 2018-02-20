import curry from './../../curry';

// Also called Join
const fork = curry((joiner, fnA, fnB, x) => joiner(fnA(x), fnB(x)));

export default fork;
