import curry from './curry';
import clone from './util/clone';

export default curry((prop, obj, val) => {
  const c = clone(obj);

  c[prop] = val;
  return c;
});
