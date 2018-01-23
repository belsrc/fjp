// Also called Either/Alternation
export default (f, g) => x => f(x) || g(x);
