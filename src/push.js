const isArray = require('./util/isArray');
const clone = require('./util/clone');

// push(5, [ 1, 2, 3, 4 ]);
// >> [ 1, 2, 3, 4, 5 ]
//
// push(5)
// >> [5]
//
module.exports = (val, arr) => isArray(arr) ? [ ...clone(arr), val ] : [val];
