import reduce from './../reduce';

export default (...args) => reduce([], (acc, val) => [ ...acc, ...val ], args);
