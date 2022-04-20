/**
 * In lieu of Proper Tail Calls, wraps the given function in a trampoline. This loops the given function until it returns a non-function value.
 * @signature trampoline :: (a -> b) -> a -> b
 * @func
 * @example
 * const sumBelow = (number, sum = 0) => number === 0  ? sum : () => sumBelow(number - 1, sum + number);
 * const sumDown = trampoline(sumBelow);
 * sumDown(100000);
 * // > 5000050000
 */
const trampoline = fn => (...args) => {
  let result = fn(...args);

  while(typeof result === 'function') {
    result = result();
  }

  return result;
}

export default trampoline;
