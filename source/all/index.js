import curry from './../curry';

export default curry((fn, array) => array.reduce((acc, curr) => fn(curr) && acc, true));
