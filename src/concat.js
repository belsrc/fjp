const isArray = require('./util/isArray');

// concat('hello', ' ', 'world', ' foo', ' bar');
// >> hello world foo bar
//
// concat([ 'foo', 'bar' ], [ 'hello', 'world' ]);
// >> [ 'foo', 'bar', 'hello', 'world' ]
//
// concat();
// >> ''
//
// concat([]);
// >> []
//
module.exports = (...args) => {
  if(!args.length) {
    return '';
  }

  return args.reduce((acc, cur) => isArray(cur) && acc, true) ?
    args.reduce((acc, val) => [ ...acc, ...val ], []) :
    args.join('');
};
