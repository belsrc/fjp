// Performs right-to-left function composition.
//
// const add5 = x => x + 5;
// const multiply = (x, y) => x * y;
// const multiplyAndAdd5 = compose(add5, multiply);
// multiplyAndAdd5(5, 2);
//
// >> 15
//
module.exports = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
