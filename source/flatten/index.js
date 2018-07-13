import reduce from './../reduce';

/* eslint-disable array-bracket-newline, array-element-newline */
const flatten = reduce((acc, curr) => [ ...acc, ...curr ], []);

export default flatten;
