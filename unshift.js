const isArray = require('./util/isArray');
const clone = require('./util/clone');

// unshift(0, [ 1, 2, 3, 4 ])
// >> [ 0, 1, 2, 3, 4 ]
//
// unshift(0)
// >> [0]
//
module.exports = (val, arr) => isArray(arr) ? [ val, ...clone(arr) ] : [val];
