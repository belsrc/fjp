const partial =
  (fn, ...partialArgs) =>
    (...remainingArgs) =>
      fn(...partialArgs, ...remainingArgs);

export default partial;
