// Also called Either/Alternation
module.exports = (f, g) => x => f(x) || g(x);
