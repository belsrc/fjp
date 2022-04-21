const alternation = (f, g) => x => f(x) || g(x);

export default alternation;
