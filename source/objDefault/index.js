import curry from './../curry';
import property from './../property';

export default curry((fb, prop, obj) =>
  obj && obj[prop] ? property(prop, obj) || fb : fb);
