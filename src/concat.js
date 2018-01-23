import isArray from './util/isArray';

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
export default (...args) =>
  args.length ?
    args.reduce((acc, cur) => isArray(cur) && acc, true) ?
      args.reduce((acc, val) => [ ...acc, ...val ], []) :
      args.join('') :
    '';
