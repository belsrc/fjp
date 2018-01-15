module.exports = (fn, ...partialArgs) => (...remainingArgs) => fn(...partialArgs, ...remainingArgs);
