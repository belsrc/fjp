import curry from './curry';

const tap = curry((x, y) => {
  x(y);
  return y;
});

export default tap;
