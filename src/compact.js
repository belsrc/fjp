const isArray = require('./util/isArray');

// Removes falsey values from an array.
//
// compact([ 0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34 ]);
// >> [ 1, 2, 3, 'a', 's', 34 ]
//
// compact(null)
// >> []
//
module.exports = arr => isArray(arr) ? arr.filter(Boolean) : [];
