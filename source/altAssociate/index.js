import curry from './../curry';
import assoc from './../assoc';

const altAssoc = curry((prop, val, obj) => assoc(prop, obj, val));

export default altAssoc;
