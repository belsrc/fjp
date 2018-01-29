import curry from './../curry';

export default curry((x, y) => {
  x(y);
  return y;
});
