export default (fn, ...partialArgs) => (...remainingArgs) =>
  fn(...partialArgs, ...remainingArgs);
