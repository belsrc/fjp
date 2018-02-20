// Also called Sequence
const s = (...fns) => x => fns.forEach(fn => fn(x));

export default s;
