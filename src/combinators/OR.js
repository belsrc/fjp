import curry from './../curry';

// Also called Either/Alternation
export default curry((f, g) => x => f(x) || g(x));
