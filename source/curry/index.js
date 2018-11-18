/**
 * Wraps the given function, if the number of provided args is sufficient, call the passed function fn.
 * Otherwise, return a wrapped function fn that expects the rest of the arguments.
 * If you want to curry a function that accepts a variable number of arguments (a variadic function),
 * you can optionally pass the number of arguments to the second parameter arity.
 * @func
 * @signature curry :: ((a, b, ..., n) -> m) -> a -> b -> ...n -> m
 * @arg {Function} fn
 * @example
 * const add = curry((x, y) => x + y);
 * const addFiveTo = add(5);
 * addFiveTo(10); // 15
 */
function curry(fn, arity = fn.length, ...args) {
  return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
}

export default curry;
