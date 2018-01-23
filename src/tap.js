import curry from './curry';

const tap = (x, y) => {
  x(y);
  return y;
};

export default curry(tap);
