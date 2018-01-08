// Curries a function.
// If the number of provided arguments (args) is sufficient, call the passed function fn.
// Otherwise, return a curried function fn that expects the rest of the arguments.
// If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()),
// you can optionally pass the number of arguments to the second parameter arity.
//
// curry(Math.pow)(2)(10);
// >> 1024
//
// curry(Math.min, 3)(10)(50)(2);
// >> 2
//
function curry(fn, arity = fn.length, ...args) {
  return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
}

module.exports = curry;
