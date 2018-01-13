// Performs left-to-right function composition.
// The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.
//
// const add5 = x => x + 5;
// const multiply = (x, y) => x * y;
// const multiplyAndAdd5 = pipe(multiply, add5);
// multiplyAndAdd5(5, 2);
//
// >> 15
//
module.exports = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
